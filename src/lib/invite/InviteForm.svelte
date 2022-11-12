<script>
  import { createEventDispatcher } from "svelte";
  import { createForm } from "svelte-forms-lib";

  import Field from "../forms/Field.svelte";
  import Control from "../forms/Control.svelte";

  import Autocomplete from "../Autocomplete.svelte";
  import TagInput from "../TagInput.svelte";
  import qpf from "../queryProviderFactory";

  import client from "../../api/client";

  import { loadingIndicator } from "../../store";

  import { dispatcher } from "../NotificationDispatcher";

  const dispatch = createEventDispatcher();

  const createInvite = async (payload) => {
    try {
      let { data } = await client.post(`/manage/invites/create`, payload);
      if (data.success) {
        createdMessage = `${data.id}`;
        dispatcher.success("Success", `${data.message}`, 2000);
        return true;
      } else {
        dispatcher.error("Error", `Server returned: ${data.error}`, 2000);
      }
    } catch (err) {
      dispatcher.error("Error", `${err}`, 2000);
    }
    return false;
  };

  let createdMessage = null;
  let inviteToEmail = true;
  let tagReset;
  const { form, errors, state, handleChange, handleSubmit, handleReset } =
    createForm({
      initialValues: {
        email: null,
        roles: [],
        applications: [],
      },
      validate: (values) => {
        let errs = {};
        return errs;
      },
      onSubmit: async (values) => {
        loadingIndicator.set(true);
        const success = await createInvite(values);
        if (success) {
          handleReset();
          tagReset();
        }
        dispatch("invite-created");
        loadingIndicator.set(false);
      },
    });

  const addRole = () => {
    $form.roles = $form.roles.concat("");
  };

  const removeRole = (i) => () => {
    $form.roles = $form.roles.filter((u, j) => j !== i);
  };

  // const roleQueryProvider = qpf().static(["admin", "inviter"]);
  const roleQueryProvider = qpf().dyanmic(async (input) => {
    let { data } = await client.get(`/manage/roles`, {
      params: {
        page: 1,
        page_size: 25,
        q: input,
        sort: "",
      },
    });
    return data.entries.map(f => f.name);
  });
  const appQueryProvider = qpf().dyanmic(async (input) => {
    let { data } = await client.get(`/manage/applications`, {
      params: {
        page: 1,
        page_size: 25,
        query: `name==${input}*`,
        sort: "",
      },
    });
    return data.entries;
  });
</script>

{#if createdMessage}
  <div class="notification is-success">
    Succesfully created invite code: <strong>{createdMessage}</strong>
  </div>
{/if}
<form on:submit|preventDefault={handleSubmit}>
  <Field>
    <Control>
      <label for="i-email">
        <input id="i-email" type="checkbox" bind:checked={inviteToEmail} />
        Invite to email
      </label>
    </Control>
  </Field>
  {#if inviteToEmail}
    <Field label="Email" error={$errors.email}>
      <Control>
        <input
          class="input {$errors.email ? 'is-danger' : ''}"
          type="text"
          name="email"
          on:change={handleChange}
          bind:value={$form.email}
        />
      </Control>
    </Field>
  {/if}

  <Field grouped={true} label="Roles" />
  <div class="columns is-multiline">
    {#each $form.roles as uri, j}
      <div class="column is-narrow">
        <Field grouped={true}>
          <Control expanded={true}>
            <Autocomplete
              on:change={handleChange}
              bind:value={$form.roles[j]}
              queryProvider={roleQueryProvider}
            />
          </Control>
          <Control>
            <button class="delete" on:click|preventDefault={removeRole(j)} />
          </Control>
        </Field>
      </div>
    {/each}
  </div>
  <Field>
    <button class="button is-primary" on:click|preventDefault={addRole}
      >+ Add Role</button
    >
  </Field>
  <Field grouped={false} label="pre-approved Applications">
    <Control expanded={true}>
      <TagInput
        queryProvider={appQueryProvider}
        bind:Reset={tagReset}
        let:match
        valueProperty="id"
        bind:selectedValues={$form.applications}
      >
        <div slot="tag" let:item>
          <strong>{item.name}</strong> <small>({item.client_id})</small>
        </div>
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{match.name}</strong> <small>({match.client_id})</small>
              </p>
            </div>
          </div>
          <div class="media-right">
            <small>{match.status}</small>
          </div>
        </article>
      </TagInput>
    </Control>
  </Field>
  <button type="submit" class="button is-link">Submit</button>
</form>
