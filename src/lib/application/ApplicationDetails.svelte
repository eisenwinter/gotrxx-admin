<script>
  import Card from "../Card.svelte";
  import NaIcon from "../icons/NaIcon.svelte";
  import KeyIcon from "../icons/KeyIcon.svelte";
  import PlusIcon from "../icons/PlusIcon.svelte";
  import MinusIcon from "../icons/MinusIcon.svelte";
  import applicationActions from "../../actions/ApplicationActions";
  import client from "../../api/client";

  export let application = null;

  const refresh = async () => {
    const { data } = await client.get("/manage/applications/by-client-id", {
      params: { client_id: application.client_id },
    });
    application = data;
  };

  const actions = applicationActions(application, refresh);

  const retireApplication = actions.retireApplication;

  let secretInputEnabled = false;
  let secretInput = "";
  const showSecretInput = () => {
    secretInput = "";
    secretInputEnabled = !secretInputEnabled;
  };

  const setSecret = async () => {
    if (secretInput && secretInput.length > 0) {
      await actions.setSecret(secretInput);
      secretInputEnabled = false;
      secretInput = "";
    }
  };

  let newRedirect = "";
  let newLogout = "";

  const addRedirectUri = async () => {
    if (newRedirect.length === 0) {
      return;
    }
    await actions.addRedirectUri(newRedirect);
    newRedirect = "";
  };
  const removeRedirectUri = (uri) => async () => {
    await actions.removeRedirectUri(uri);
  };

  const addLogoutUri = async () => {
    if (newLogout.length === 0) {
      return;
    }
    await actions.addLogoutUri(newLogout);
    newLogout = "";
  };
  const removeLogoutUri = (uri) => async () => {
    await actions.removeLogoutUri(uri);
  };
  const addFlow = (flow) => async () => {
    await actions.addFlow(flow);
  };
  const removeFlow = (flow) => async () => {
    actions.removeFlow(flow);
  };
  const enablePKCE = actions.enablePKCE;

  const disablePKCE = actions.disablePKCE;

  const flowClicked = (flow) => async () => {
    console.log(application.flows);
    if (application.flows.find((f) => f === flow) != null) {
      await actions.removeFlow(flow);
    } else {
      await actions.addFlow(flow);
    }
  };

  const detailsClosed = () => {
    application = null;
  };
</script>

{#if application}
  <Card closeable={true} on:card-closed={detailsClosed}>
    <span slot="title">({application.client_id}) {application.name}</span>
    <div class="columns">
      <div class="column">
        <dl class="columns is-multiline is-mobile">
          <dt class="column is-3">Name:</dt>
          <dd class="column is-9">{application.name}</dd>
          <dt class="column is-3">Client ID:</dt>
          <dd class="column is-9">{application.client_id}</dd>
          <dt class="column is-3">Type:</dt>
          <dd class="column is-9">{application.type}</dd>
        </dl>
      </div>
      <div class="column">
        <dl class="columns is-multiline is-mobile">
          <dt class="column is-4">Status:</dt>
          <dd class="column is-8">{application.status}</dd>
          <dt class="column is-4">Has Secret:</dt>
          <dd class="column is-8">{application.has_secret}</dd>
          <dt class="column is-4">PKCE:</dt>
          <dd class="column is-8">{application.pkce}</dd>
        </dl>
      </div>
      <div class="column">
        <dl class="columns is-multiline is-mobile">
          <dt class="column is-3">Scope:</dt>
          <dd class="column is-9">{application.scope}</dd>
        </dl>
      </div>
    </div>
    {#if application.client_id !== "$.gotrxx"}
      <div class="columns">
        <div class="column">
          <div class="divider">Redirect URIs</div>
          <ul
            class="field is-grouped is-grouped-multine is-flex-direction-column"
          >
            {#each application.redirect_uris as uri}
              <li class="control">
                <div class="tags are-medium has-addons">
                  <div class="tag">{uri}</div>
                  <div
                    class="tag is-delete is-clickable"
                    on:click={removeRedirectUri(uri)}
                  />
                </div>
              </li>
            {/each}
          </ul>
          <div class="field has-addons">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="https://..."
                bind:value={newRedirect}
              />
            </div>
            <div class="control">
              <button class="button is-primary" on:click={addRedirectUri}>
                Add
              </button>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="divider">Logout URIs</div>
          <ul
            class="field is-grouped is-grouped-multine is-flex-direction-column"
          >
            {#each application.logout_uris as uri}
              <li class="control">
                <div class="tags are-medium has-addons">
                  <div class="tag">{uri}</div>
                  <div
                    class="tag is-delete is-clickable"
                    on:click={removeLogoutUri(uri)}
                  />
                </div>
              </li>
            {/each}
          </ul>
          <div class="field has-addons">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="https://..."
                bind:value={newLogout}
              />
            </div>
            <div class="control">
              <button class="button is-primary" on:click={addLogoutUri}>
                Add
              </button>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="divider">Allowed flows</div>
          <div class="checkbox-group">
            <label class="checkbox">
              <input
                type="checkbox"
                bind:group={application.flows}
                value="authorization_code"
                on:click={flowClicked("authorization_code")}
              /> <span class="button">authorization_code</span>
            </label>
            <label class="checkbox">
              <input
                type="checkbox"
                bind:group={application.flows}
                value="client_credentials"
                on:click={flowClicked("client_credentials")}
              /> <span class="button">client_credentials</span>
            </label>
            <label class="checkbox">
              <input
                type="checkbox"
                bind:group={application.flows}
                value="refresh_token"
                on:click={flowClicked("refresh_token")}
              /> <span class="button">refresh_token</span>
            </label>
            <label class="checkbox">
              <input
                type="checkbox"
                bind:group={application.flows}
                value="password"
                on:click={flowClicked("password")}
              />
              <span class="button">password</span>
            </label>
          </div>
        </div>
      </div>
    {/if}

    <div slot="footer">
      {#if application.client_id !== "$.gotrxx"}
        <div class="buttons">
          {#if application.status === "active"}
            <button on:click={retireApplication} class="button is-danger">
              <NaIcon />
              <span>Retire application</span>
            </button>
          {/if}
          <div class="dropdown mr-2 {secretInputEnabled ? 'is-active' : ''}">
            <div class="dropdown-trigger">
              <button class="button" on:click={showSecretInput}>
                <KeyIcon /><span> Set secret</span>
              </button>
            </div>
            <div class="dropdown-menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                    <div class="field has-addons">
                        <p class="control">
                    <input
                    class="input"
                    type="text"
                    placeholder="my secret"
                    bind:value={secretInput}
                  />
                  </p>
                  <p class="control">

                    <button class="button" on:click={setSecret}>
                        <PlusIcon />
                      </button>
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {#if !application.pkce}
            <button class="button" on:click={enablePKCE}>
              <PlusIcon /><span> Enable PKCE</span>
            </button>
          {/if}
          {#if application.pkce}
            <button class="button is-warning" on:click={disablePKCE}>
              <MinusIcon /><span> Disable PKCE</span>
            </button>
          {/if}
        </div>
      {:else}
        <span class="is-help">Gotrxx itself cant be edited.</span>
      {/if}
    </div>
  </Card>
{/if}
