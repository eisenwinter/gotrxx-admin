<script>
    import { createEventDispatcher } from "svelte";
    import { createForm } from "svelte-forms-lib";

    import Field from "../forms/Field.svelte";
    import Control from "../forms/Control.svelte";

    import client from "../../api/client";

    import { loadingIndicator } from "../../store";

    import { dispatcher } from "../NotificationDispatcher";

    const createApplication = async (payload) => {
        try {
            let { data } = await client.post(
                `/manage/applications/create`,
                payload
            );
            if (data.success) {
                dispatcher.success("Success", `${data.message}`, 2000);
                return true;
            } else {
                dispatcher.error(
                    "Error",
                    `Server returned: ${data.error}`,
                    2000
                );
            }
        } catch (err) {
            dispatcher.error("Error", `${err}`, 2000);
        }
        return false;
    };
    const dispatch = createEventDispatcher();
    const { form, errors, state, handleChange, handleSubmit, handleReset } =
        createForm({
            initialValues: {
                client_id: "",
                client_secret: "",
                name: "",
                type: "implicit_granted",
                confidentiality: "private",
                flows: [],
                pkce: false,
                scopes: "",
                logout_uris: [],
                redirect_uris: [],
            },
            validate: (values) => {
                let errs = {};
                if (!values.client_id || values.client_id.length == 0) {
                    errs["client_id"] = "client_id is required";
                }
                if (!values.name || values.name.length == 0) {
                    errs["name"] = "name is required";
                }
                return errs;
            },
            onSubmit: async (values) => {
                loadingIndicator.set(true);
                const success = await createApplication(values);
                if (success) {
                    handleReset();
                    dispatch("application-created");
                }
                loadingIndicator.set(false);
            },
        });

    let horizontal = false;

    const addRedirect = () => {
        $form.redirect_uris = $form.redirect_uris.concat("");
    };

    const removeRedirect = (i) => () => {
        $form.redirect_uris = $form.redirect_uris.filter((u, j) => j !== i);
    };

    const addLogout = () => {
        $form.logout_uris = $form.logout_uris.concat("");
    };

    const removeLogout = (i) => () => {
        $form.logout_uris = $form.logout_uris.filter((u, j) => j !== i);
    };

    const helpTextType = `<p><strong>Implicit</strong> means anyone can use this application.</p><p><strong>Explicit</strong> means the user needs to be authorized for the application first.</p>`
    const scopesHelpTexType = `<p><strong>Scopes</strong> by space spereated.</p>`
    const confidentialityHelpTextType = `<p>Confidentiality defines if a application is able to secure a secret, a private applications (e.g. backend services) is but a public application is not (e.g. Javascript Clients)</p><p>A <strong>private</strong> application should have a secret set.</p>`
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div class="columns is-multiline">
        <div class="column is-6">
            <Field {horizontal} error={$errors.client_id} label="Client ID">
                <Control>
                    <input
                        class="input {$errors.client_id ? 'is-danger' : ''}"
                        type="text"
                        name="client_id"
                        on:change={handleChange}
                        bind:value={$form.client_id}
                    />
                </Control>
            </Field>
        </div>
        <div class="column is-6">
            <Field {horizontal} label="Name" error={$errors.name}>
                <Control>
                    <input
                        class="input {$errors.name ? 'is-danger' : ''}"
                        type="text"
                        name="name"
                        on:change={handleChange}
                        bind:value={$form.name}
                    />
                </Control>
            </Field>
        </div>
        <div class="column is-6">
            <Field {horizontal} label="Confidentiality" helpTooltip={confidentialityHelpTextType} >
                <Control>
                    <label class="radio">
                        <input
                            type="radio"
                            name="confidentiality"
                            value="private"
                            on:change={handleChange}
                            bind:group={$form.confidentiality}
                        />
                        Private
                    </label>
                    <label class="radio">
                        <input
                            type="radio"
                            name="confidentiality"
                            value="public"
                            on:change={handleChange}
                            bind:group={$form.confidentiality}
                        />
                        Public
                    </label>
                </Control>
            </Field>
        </div>
        <div class="column is-6">
            <Field {horizontal} label="Secret" error={$errors.client_secret}>
                <Control>
                    <input
                        class="input  {$errors.client_secret
                            ? 'is-danger'
                            : ''}"
                        type="text"
                        name="client_secret"
                        on:change={handleChange}
                        bind:value={$form.client_secret}
                    />
                </Control>
            </Field>
        </div>
        <div class="column is-6">
            <Field {horizontal} label="Granted" helpTooltip={helpTextType}>
                <Control>
                    <label class="radio">
                        <input
                            type="radio"
                            name="type"
                            value="implicit_granted"
                            bind:group={$form.type}
                            on:change={handleChange}
                        />
                        Implicit
                    </label>
                    <label class="radio">
                        <input
                            type="radio"
                            name="type"
                            value="explicit_granted"
                            bind:group={$form.type}
                            on:change={handleChange}
                        />
                        Explicit
                    </label>
                </Control>
            </Field>
        </div>
        <div class="column is-6">
            <Field {horizontal} label="Flows">
                <Control>
                    <label class="checkbox">
                        <input
                            type="checkbox"
                            bind:group={$form.flows}
                            on:change={handleChange}
                            value="authorization_code"
                        /> authorization_code
                    </label>
                    <label class="checkbox">
                        <input
                            type="checkbox"
                            bind:group={$form.flows}
                            on:change={handleChange}
                            value="client_credentials"
                        /> client_credentials
                    </label>
                    <label class="checkbox">
                        <input
                            type="checkbox"
                            bind:group={$form.flows}
                            on:change={handleChange}
                            value="refresh_token"
                        /> refresh_token
                    </label>
                    <label class="checkbox">
                        <input
                            type="checkbox"
                            bind:group={$form.flows}
                            on:change={handleChange}
                            value="password"
                        /> password
                    </label>
                </Control>
            </Field>
        </div>
        <div class="column is-6">
            <Field {horizontal} label="Proof Key of Exchange">
                <Control>
                    <label class="checkbox">
                        <input
                            type="checkbox"
                            bind:checked={$form.pkce}
                            on:change={handleChange}
                            value={true}
                            name="pkce"
                        /> PKCE
                    </label>
                </Control>
            </Field>
        </div>
        <div class="column is-6">
            <Field {horizontal} label="Scopes" helpTooltip={scopesHelpTexType}>
                <Control>
                    <input
                        class="input"
                        type="text"
                        name="scopes"
                        on:change={handleChange}
                        bind:value={$form.scopes}
                    />
                </Control>
            </Field>
        </div>
        <div class="column is-6">
            <Field grouped={true} {horizontal} label="Redirect URIs" />
            {#each $form.redirect_uris as uri, j}
                <Field grouped={true}>
                    <Control expanded={true}>
                        <input
                            class="input"
                            type="text"
                            name={`redirect_uris[${j}]`}
                            on:change={handleChange}
                            bind:value={$form.redirect_uris[j]}
                        />
                    </Control>
                    <Control>
                        <button
                            class="delete"
                            on:click|preventDefault={removeRedirect(j)}
                        />
                    </Control>
                </Field>
            {/each}
            <Field>
                <button
                    class="button is-primary"
                    on:click|preventDefault={addRedirect}>+</button
                >
            </Field>
        </div>
        <div class="column is-6">
            <Field grouped={true} {horizontal} label="Logout URIs" />
            {#each $form.logout_uris as uri, j}
                <Field grouped={true}>
                    <Control expanded={true}>
                        <input
                            class="input"
                            type="text"
                            name={`logout_uris[${j}]`}
                            on:change={handleChange}
                            bind:value={$form.logout_uris[j]}
                        />
                    </Control>
                    <Control>
                        <button
                            class="delete"
                            on:click|preventDefault={removeLogout(j)}
                        />
                    </Control>
                </Field>
            {/each}
            <Field>
                <button
                    class="button is-primary"
                    on:click|preventDefault={addLogout}>+</button
                >
            </Field>
        </div>
    </div>
    <button type="submit" class="button is-link">Submit</button>
</form>
