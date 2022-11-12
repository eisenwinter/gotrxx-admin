<script>
    import PageHeader from "../lib/PageHeader.svelte";
    import Card from "../lib/Card.svelte";

    import Table from "../lib/Table.svelte";
    import Pagination from "../lib/Pagination.svelte";

    import client from "../api/client";

    import { loadingIndicator, oidcStore } from "../store";
    import { confirm } from "../lib/Dialog.js";
    import { dispatcher } from "../lib/NotificationDispatcher";
    import UserDetails from "../lib/user/UserDetails.svelte";

    import userActions from "../actions/UserActions"

    let currentUser = null;
    oidcStore.subscribe((s) => {
        currentUser = s.user;
    });
    let apps = {};
    let page = 1;
    let pageSize = 15;
    let loading = false;
    let total = 30;

    function pageChanged(event) {
        page = event.detail.page;
        promise = reload();
    }

    async function reload() {
        let { data } = await client.get(
            `/manage/users?page=${page}&page_size=${pageSize}`
        );
        total = data.total;
        apps = data;
    }
    let promise = reload();

    const refresh = async () => {
        promise = reload();
    } 

    const banUser = async (i, d) => {
        if (d) {
            await userActions(d, refresh).banUser(currentUser)()
        }
    };

    const unbanUser = async (i, d) => {
        if (d) {
           await userActions(d, refresh).unbanUser()
        }
    };

    const unlockUser = async (i, d) => {
        if (d) {
            await userActions(d, refresh).unlockUser()
        }
    };

    const confirmUser = async (i, d) => {
        if (d) {
            await userActions(d, refresh).confirmUser()
        }
    };



    let columns = [
        // {
        //     name: "ID",
        //     property: "id",
        //     format: "number",
        //     class: "truncate",
        // },
        {
            name: "E-Mail",
            property: "email",
            tooltip: "email_confirmed",
            indicator: (value) => {
                if (!value.email_confirmed || value.banned_on) {
                    return "is-danger";
                }
                if (value.lockout_till) {
                    return "is-warning";
                }
                return "is-success";
            },
        },
        {
            name: "Phone",
            property: "Phone",
            tooltip: "phone_confirmed",
        },
        {
            name: "Roles",
            property: "roles",
        },
        {
            name: "2FA",
            property: "mfa",
            format: "bool",
        },
        {
            name: "Locked out",
            property: "lockout_till",
            format: "if-time",
        },
        {
            name: "Banned on",
            property: "banned_on",
            format: "if-time",
        },
        {
            name: "Actions",
            format: "menu",
            menu: [
                {
                    action: "Deails",
                    onClick: (_, d) => currentDetails = d
                },
                {
                    action: "Ban",
                    onClick: banUser,
                    showIf: (d) => d.banned_on == null,
                },
                {
                    action: "Unban",
                    onClick: unbanUser,
                    showIf: (d) => d.banned_on != null,
                },
                {
                    action: "Unlock",
                    onClick: unbanUser,
                    showIf: (d) => d.lockout_till != null,
                },
                {
                    action: "Confirm email / account",
                    onClick: confirmUser,
                    showIf: (d) => !d.email_confirmed,
                },
            ],
        },
    ];

    let currentDetails = null;
</script>

<div class="section">
    <PageHeader title="Manage" subtitle="Users" />

    {#if currentDetails}
        <UserDetails bind:user={currentDetails} />
        <br />
    {/if}

    <Card padding={false}>
        <span slot="title"> Users </span>

        {#await promise}
            <article class="message">
                <div class="message-body">Fetching users</div>
            </article>
        {:then _}
            <Table data={apps.entries} {columns} />
        {:catch error}
            <article class="message is-danger">
                <div class="message-body">
                    {error.message}
                </div>
            </article>
        {/await}

        <span slot="footer">
            <Pagination
                on:page-changed={pageChanged}
                {pageSize}
                {total}
                currentPage={page}
            />
        </span>
    </Card>
</div>
