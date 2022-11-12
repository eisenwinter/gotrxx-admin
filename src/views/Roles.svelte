<script>
    import PageHeader from "../lib/PageHeader.svelte";
    import Card from "../lib/Card.svelte";

    import Table from "../lib/Table.svelte";
    import Pagination from "../lib/Pagination.svelte";

    import client from "../api/client";

    let apps = {};
    let page = 1;
    let pageSize = 15;
    let total = 30;

    let columns = [
        {
            name: "ID",
            property: "id",
            format: "number",
            class: "w-60",
        },
        {
            name: "Name",
            property: "name",
        },
    ];

    function pageChanged(event) {
        page = event.detail.page;
        promise = reload();
    }

    async function reload() {
        let { data } = await client.get(
            `/manage/roles?page=${page}&page_size=${pageSize}`
        );
        total = data.total;
        apps = data;
    }
    let promise = reload();
</script>

<div class="section">
    <PageHeader title="Manage" subtitle="Roles" />
    <Card padding={false}>
        <span slot="title"> Roles </span>

        {#await promise}
            <article class="message">
                <div class="message-body">Fetching roles</div>
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
