<script>
  import ApplicationDetails from '../lib/application/ApplicationDetails.svelte';

  import PageHeader from "../lib/PageHeader.svelte";
  import Card from "../lib/Card.svelte";

  import Table from "../lib/Table.svelte";
  import Pagination from "../lib/Pagination.svelte";
  import { confirm } from "../lib/Dialog.js";
  import { dispatcher } from "../lib/NotificationDispatcher";

  import ApplicationForm from "../lib/application/ApplicationForm.svelte";

  import client from "../api/client";

  import { loadingIndicator } from "../store";

  let apps = {};
  let page = 1;
  let pageSize = 15;
  let loading = false;
  let total = 30;

  let sort = "";
  let query = "";

  let currentDetails = null;

  async function reload() {
    let { data } = await client.get(`/manage/applications`, {
      params: {
        page: page,
        page_size: pageSize,
        q: query,
        sort: sort,
      },
    });
    total = data.total;
    apps = data;
  }
  let promise = reload();

  const retireApplication = (i, d) => {
    if (d) {
      if (d.client_id == "$.gotrxx") {
        dispatcher.error(
          "Error: not possible",
          "You can not retire `$.gotrxx` because it will break your instance.",
          2000
        );
        return;
      }
      confirm(
        {
          title: "Are you sure?",
          message: `<p>This action can <strong>not</strong> be undone. 
                    <p>Once retired no more token will be issued for <strong>'${d.client_id}'</strong> and all active tokens will be marked as revoked.</p>`,
        },
        async () => {
          loadingIndicator.set(true);
          try {
            let { data } = await client.put(`/manage/applications/retire`, {
              client_id: d.client_id,
            });
            if (data.success) {
              dispatcher.success("Success", `${data.message}`, 2000);
            } else {
              dispatcher.error("Error", `Server returned: ${data.error}`, 2000);
            }
          } catch (err) {
            dispatcher.error("Error", `${err}`, 2000);
          }
          loadingIndicator.set(false);
          promise = reload();
        },
        () => {}
      );
    }
  };

  function confirmDelete() {
    confirm(
      {
        title: "Delete all retired applications?",
        message:
          "This will remove all applications in the `retired` state. <p><strong>This action can not be undone.</strong></p>",
      },
      async () => {
        loadingIndicator.set(true);
        try {
          let { data } = await client.delete(`/manage/applications/purge`);
          if (data.success) {
            dispatcher.success("Success", `${data.message}`, 2000);
          } else {
            dispatcher.error("Error", `Server returned: ${data.error}`, 2000);
          }
        } catch (err) {
          dispatcher.error("Error", `${err}`, 2000);
        }
        loadingIndicator.set(false);
        promise = reload();
      }
    );
  }

  let showNew = false;
  let columns = [
    {
      name: "ID",
      property: "id",
      format: "number",
      class: "",
      sortable: true,
    },
    {
      name: "Client ID",
      property: "client_id",
      sortable: true,
    },
    {
      name: "Name",
      property: "name",
      sortable: true,
    },
    {
      name: "Seceret",
      property: "has_secret",
      format: "bool",
      class: "has-text-centered",
    },
    {
      name: "Type",
      property: "type",
    },
    {
      name: "Confident.",
      property: "confidentiality",
      sortable: true,
    },
    {
      name: "Status",
      property: "status",
      indicator: (value) => {
        if (value.status == "retired") {
          return "is-danger";
        }
        return "is-success";
      },
    },
    {
      name: "Actions",
      format: "menu",
      menu: [
        {
          action: "Details",
          onClick: (i, d) => (currentDetails = d),
        },
        {
          action: "Retire",
          onClick: retireApplication,
          showIf: (d) => d.status !== "retired",
        },
      ],
    },
  ];

  function pageChanged(event) {
    page = event.detail.page;
    promise = reload();
  }

  function sortChanged(event) {
    sort = event.detail.query;
    promise = reload();
  }

  
  function reloadApplications() {
    promise = reload();
  }


  const cardClosed = () => {
    showNew = false;
  };

</script>

<div class="section">
  <PageHeader title="Manage" subtitle="Applications">
    <div class="buttons">
      <button on:click={() => (showNew = true)} class="button is-link"
        >New Application</button
      >
      <button on:click={confirmDelete} class="button is-danger"
        >Purge retired</button
      >
    </div>
  </PageHeader>
  {#if showNew}
    <Card closeable={true} on:card-closed={cardClosed}>
      <span slot="title">Create Application</span>
      <ApplicationForm on:application-created={reloadApplications} />
    </Card>
  {:else}
    {#if currentDetails}
        <ApplicationDetails bind:application={currentDetails}></ApplicationDetails>
      <br />
    {/if}
    <Card padding={false}>
      <span slot="title"> Applications </span>
      {#await promise}
        <article class="message">
          <div class="message-body">Fetching applications</div>
        </article>
      {:then _}
        <Table on:sort-changed={sortChanged} data={apps.entries} {columns} />
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
