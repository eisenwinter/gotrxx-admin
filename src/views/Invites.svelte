<script>
    import PageHeader from "../lib/PageHeader.svelte";
    import Card from "../lib/Card.svelte";

    import Table from "../lib/Table.svelte";
    import Pagination from "../lib/Pagination.svelte";

    import client from "../api/client";
    import InviteForm from "../lib/invite/InviteForm.svelte";

    let apps = {};
    let page = 1;
    let pageSize = 15;
    let loading = false;
    let total = 30;

    let columns = [
        {
            name: "ID",
            property: "id",
            format: "number",
            class: "truncate",
        },
        {
            name: "Invite Code",
            property: "code",
            indicator: (value) => {
                if (value.consumed_at) {
                    return "is-success";
                }
                if(value.expires_at < new Date()) {
                    return "is-danger"
                }
                return "is-warning";
            },
        },
        {
            name: "Email",
            property: "email",
        },
        {
            name: "Created",
            property: "created_at",
            format: "if-time",
        },
        {
            name: "Consumed",
            property: "consumed_at",
            format: "if-time",
        },
        {
            name: "Expires",
            property: "expires_at",
            format: "if-time",
        },
        {
            name: "E.sent",
            property: "sent_at",
            format: "if-time",
        },
        {
            name: "Roles",
            property: "roles",
        },
        {
            name: "Applications",
            property: "applications",
            format: "length",
        },
    ];

    function pageChanged(event) {
        page = event.detail.page;
        promise = reload();
    }



    async function reload() {
        let { data } = await client.get(
            `/manage/invites?page=${page}&page_size=${pageSize}`
        );
        total = data.total;
        apps = data;
    }
    let promise = reload();

    function reloadPage() {
        promise = reload();
    }

    let showNew = false;
    const cardClosed = () => {
        showNew = false
    }
</script>

<div class="section">
    <PageHeader title="Manage" subtitle="Invites" >
        <div class="buttons">
            <button on:click={() => (showNew = true)} class="button is-link">New Invitation</button>
        </div>
    </PageHeader>
    {#if showNew}
    <Card closeable={true} on:card-closed={cardClosed}>
        <span slot="title">New Invitation</span>
        <InviteForm on:invite-created={reloadPage} />
    </Card>
    {:else }

    <Card padding={false}>
        <span slot="title"> Invites </span>

        {#await promise}
            <article class="message">
                <div class="message-body">Fetching invites</div>
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
    {/if}
</div>
