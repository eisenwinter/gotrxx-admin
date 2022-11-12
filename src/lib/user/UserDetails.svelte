<script>
    import client from "../../api/client";
    import qpf from "../queryProviderFactory";
    import Card from "../Card.svelte";
    import { dateTime, noValue } from "../Formatting";
    import Autocomplete from "../Autocomplete.svelte";
    import TagInput from "../TagInput.svelte";
    import { oidcStore } from "../../store";

    import userActions from "../../actions/UserActions";
    export let user = null;

  
    const refresh = async () => {
        const { data } = await client.get("/manage/users/by-id", {
            params: { id: user.id },
        });
        user = data;
    };

    import NaIcon from "../icons/NaIcon.svelte";
    import UnlockIcon from "../icons/UnlockIcon.svelte";
    import CheckBoxIcon from "../icons/CheckBoxIcon.svelte";
    const detailsClosed = () => {
        user = null;
    };
    let currentUser = null;
    oidcStore.subscribe((s) => {
        currentUser = s.user;
    });

    let newRole = "";

    const actions = userActions(user, refresh);

    let authorizations = []
    let authorizationsLoaded = false;

    const loadAuthorizations = async () => {
        authorizations = await actions.activeApplications()
        authorizationsLoaded = true;
    }
    let auths = loadAuthorizations();

    const unbanUser = actions.unbanUser;

    const banUser = actions.banUser(currentUser);

    const unlockUser = actions.unlockUser;

    const confirmUser = actions.confirmUser;

    const addAuthorization = async (a) => {
        await actions.grantAuthorization(a.client_id, '')
        return true;
    };

    const removeAuthorization = async (a) => {
        await actions.revokeAuthorization(a.client_id)
        return true;
    };

    const addRole = async () => {
        if(newRole && newRole.length > 0){
            await actions.addUserToRole(newRole)
        }
    };

    const removeRole = async (role) => {
        if(role && role.length > 0){
            await actions.removeUserFromRole(role)
        }

    };

    const roleQueryProvider = qpf().dyanmic(async (input) => {
        let { data } = await client.get(`/manage/roles`, {
            params: {
                page: 1,
                page_size: 25,
                query: `name==${input}*`,
                sort: "",
            },
        });
        return data.entries.map((f) => f.name);
    });
    const appQueryProvider = qpf().dyanmic(async (input) => {
        let { data } = await client.get(`/manage/applications`, {
            params: {
                page: 1,
                page_size: 25,
                query: `name==${input}*,client_id==${input}*`,
                sort: "",
            },
        });
        return data.entries;
    });
</script>

{#if user}
    <Card closeable={true} on:card-closed={detailsClosed}>
        <span slot="title">({user.id}) {user.email}</span>
        <div class="columns">
            <div class="column">
                <dl class="columns is-multiline is-mobile">
                    <dt class="column is-3">ID:</dt>
                    <dd class="column is-9">{user.id}</dd>
                    <dt class="column is-3">Email:</dt>
                    <dd class="column is-9">{noValue(user.email)}</dd>
                    <dt class="column is-3">Email confirmed:</dt>
                    <dd class="column is-9">
                        {dateTime(user.email_confirmed)}
                    </dd>
                    <dt class="column is-3">Phone:</dt>
                    <dd class="column is-9">{noValue(user.phone)}</dd>
                    <dt class="column is-3">Phone confirmed:</dt>
                    <dd class="column is-9">
                        {dateTime(user.phone_confirmed)}
                    </dd>
                    <dt class="column is-3">MFA enabled:</dt>
                    <dd class="column is-9">{user.mfa}</dd>
                </dl>
            </div>
            <div class="column">
                <dl class="columns is-multiline is-mobile">
                    <dt class="column is-3">Locked out till:</dt>
                    <dd class="column is-9">{dateTime(user.lockout_till)}</dd>
                    <dt class="column is-3">Banend on:</dt>
                    <dd class="column is-9">{dateTime(user.banned_on)}</dd>
                    <dt class="column is-3">Current failures:</dt>
                    <dd class="column is-9">{user.current_failure_count}</dd>

                    <dt class="column is-3">Confirm token:</dt>
                    <dd class="column is-9">{noValue(user.confirm_token)}</dd>

                    <dt class="column is-3">Created at</dt>
                    <dd class="column is-9">{dateTime(user.created_at)}</dd>

                    <dt class="column is-3">Updated at</dt>
                    <dd class="column is-9">{dateTime(user.updated_at)}</dd>
                </dl>
            </div>
        </div>
        <div class="divider">Roles</div>
        <ul class="field is-grouped is-grouped-multine">
            {#each user.roles as role}
                <li class="control">
                    <div class="tags are-medium has-addons">
                        <div class="tag is-link">{role}</div>
                        <div class="tag is-delete is-clickable" on:click={(e) => removeRole(role)} />
                    </div>
                </li>
            {/each}
        </ul>
        <div class="field has-addons">
            <div class="control">
                <Autocomplete
                    bind:value={newRole}
                    queryProvider={roleQueryProvider}
                />
            </div>
            <div class="control">
                <button class="button" on:click={addRole}> Add role</button>
            </div>
        </div>
        <div class="divider">Applications</div>
        {#await auths}
        <span>loading Application Authorizations</span>
        {/await}
        <TagInput 
        onBeforeAdd={addAuthorization}
        onBeforeDelete={removeAuthorization}
        selectedItems={authorizations} 
        queryProvider={appQueryProvider} let:match valueProperty="id">
            <div slot="tag" let:item>
                <strong>{item.name}</strong> <small>({item.client_id})</small>
            </div>
            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{match.name}</strong>
                            <small>({match.client_id})</small>
                        </p>
                    </div>
                </div>
                <div class="media-right">
                    <small>{match.status}</small>
                </div>
            </article>
        </TagInput>
      
        <div slot="footer">
            {#if user.id !== currentUser}
                <div class="buttons">
                    {#if user.banned_on === null}
                        <button class="button is-danger" on:click={banUser}>
                            <NaIcon />
                            <span>Ban user</span>
                        </button>
                    {/if}
                    {#if user.banned_on !== null}
                        <button class="button is-danger" on:click={unbanUser}>
                            <CheckBoxIcon />
                            <span>Unban user</span>
                        </button>
                    {/if}
                    {#if user.lockout_till !== null}
                        <button class="button" on:click={unlockUser}>
                            <UnlockIcon /><span> Unlock user</span>
                        </button>
                    {/if}
                    {#if !user.email_confirmed}
                        <button class="button" on:click={confirmUser}>
                            <CheckBoxIcon /><span>
                                Confirm email / account
                            </span>
                        </button>
                    {/if}
                </div>
            {:else}
                <span class="is-help"
                    >You are logged in and I guess you dont want to ban
                    yourself.</span
                >
            {/if}
        </div>
    </Card>
{/if}
