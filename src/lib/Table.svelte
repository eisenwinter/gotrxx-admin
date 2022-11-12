<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  const dispatch = createEventDispatcher();

  import Dropdown from "./Dropdown.svelte";
  import DropdownItem from "./DropdownItem.svelte";
  import MoreIcon from "./icons/MoreIcon.svelte";
  import AngleDownIcon from "./icons/AngleDownIcon.svelte";
  import AngleUpIcon from "./icons/AngleUpIcon.svelte";
  import ArrowsVerticalIcon from "./icons/ArrowsVerticalIcon.svelte";
  import FilterIcon from "./icons/FilterIcon.svelte";
  import { dateTime } from "./Formatting";
  import FilterBuilder from "./FilterBuilder.svelte";
  export let columns = [];
  export let data = [];

  let detailView = null

  export let searchEnabled = false;

  const closeDetailView = () => {
    detailView = null
  }

  const changedSort = () => {
    const query = columns
      .filter((f) => f.$sort === "asc" || f.$sort === "desc")
      .map((f) => {
        if (f.$sort === "asc") {
          return `+${f.property}`;
        }
        return `-${f.property}`;
      })
      .join(";");
    console.log(query);
    dispatch("sort-changed", {
      query: query,
    });
  };

  const setSort = (c, i) => () => {
    if (c.$sort == null) {
      c.$sort = "asc";
    } else if (c.$sort == "asc") {
      c.$sort = "desc";
    } else {
      c.$sort = null;
    }
    columns[i] = c;
    changedSort();
  };

  let filterBuilderActive = false;
  const toggleFilterBuilder = () => {
    filterBuilderActive = !filterBuilderActive;
  };
</script>

{#if searchEnabled}
  <div class="columns mb-0">
    <div class="column mx-3 mt-3">
      {#if !filterBuilderActive}
        <div class="global-search" in:fade>
          <div class="field">
            <p class="control">
              <input class="input" type="text" placeholder="Search" />
            </p>
          </div>
        </div>
      {/if}
      {#if filterBuilderActive}
        <div class="filter-b" out:fade>
          <FilterBuilder />
        </div>
      {/if}
    </div>
    <div class="column mx-3 mt-3 is-narrow">
      <div class="buttons has-addons is-right">
        <button
          on:click|preventDefault={toggleFilterBuilder}
          class="button {filterBuilderActive ? 'is-selected is-link' : ''}"
        >
          <FilterIcon type={filterBuilderActive ? "white" : ""} />
        </button>
      </div>
    </div>
  </div>
{/if}
<div class="table-wrapper">
  <table class="table is-striped is-hoverable">
    <thead>
      <tr>
        {#each columns as c, i}
          <th draggable="false" class="">
            <span class="is-relative">
              {c.name}
              {#if c.sortable}
                <button
                  class="button is-xsmall is-text"
                  on:click|preventDefault={setSort(c, i)}
                >
                  {#if c.$sort === "asc"}
                    <AngleUpIcon size="table" />
                  {:else if c.$sort == "desc"}
                    <AngleDownIcon size="table" />
                  {:else}
                    <ArrowsVerticalIcon size="table" />
                  {/if}
                </button>
              {/if}
            </span>
          </th>
        {/each}
      </tr></thead
    ><tbody>
      {#each data as d, i}
        <tr draggable="false" class="">
          {#each columns as c}
            <td data-label={c.name} class={c.class} data-tooltip={d[c.tooltip]}>
              {#if c.indicator}
                <span class="indicator {c.indicator(d)}" />
              {/if}
              {#if c.format === "bool"}
                <span>
                  {#if d[c.property]}
                    ✓
                  {:else}
                    ✗
                  {/if}
                </span>
              {:else if c.format == "if-time"}
                <span>
                  {#if d[c.property]}
                    {dateTime(d[c.property])}
                  {:else}
                    ✗
                  {/if}
                </span>
              {:else if c.format == "length"}
                <span>
                  {#if d[c.property]}
                    {d[c.property].length}
                  {:else}
                    0
                  {/if}
                </span>
              {:else if c.format == "json"}
                {#if d[c.property]}
                  <small
                    ><xmp>{JSON.stringify(d[c.property], null, 2)}</xmp></small
                  >
                {/if}
              {:else if c.format == "button"}
                <button
                  on:click={() => c.onClick(i, d[c.property])}
                  type="button"
                  class="button is-xsmall"><span>show</span></button
                >
              {:else if c.format == "menu"}
                <div class="table-menu">
                  <Dropdown size="is-xsmall" right={true}>
                    <div slot="content">
                      <div class="mx-1">
                        <MoreIcon />
                      </div>
                    </div>

                    {#each c.menu as btn}
                      {#if btn.showIf == null || btn.showIf(d)}
                        <DropdownItem on:click={() => btn.onClick(i, d)}
                          >{btn.action}</DropdownItem
                        >
                      {/if}
                    {/each}
                  </Dropdown>
                </div>
              {:else if d[c.property] === undefined || d[c.property] === null}
                <span>-</span>
              {:else}
                <span>
                  {d[c.property]}
                </span>
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
  {#if detailView}
  <div class="aside">
    <div class="aside-content">
      <div class="columns is-multiline"> 
        <div class="column is-12 has-text-right">
          <button on:click={closeDetailView} class="delete" aria-label="close"></button>
        </div>
        <div class="column is-12 "> 
          <slot {detailView} name="detailView" />
        </div>
      </div>
    </div>
  </div>
  {/if}
</div>

<style lang="sass">
.table-wrapper
    position: relative
    .aside
      height: 100%
      width: 100%
      position: absolute
      z-index: 1
      top: 0
      left: 0
      overflow-x: hidden
      padding: 0
      padding-top: 44px
      margin: 0
      transition: 0.5s
      .aside-content
        height: 100%
        background-color: #fff
@media screen and (max-width: 768px)
    .table
        background-color: transparent
    .table 
        & tr
            box-shadow: 0 2px 3px hsl(0deg 0% 4% / 10%), 0 0 0 1px hsl(0deg 0% 4% / 10%)
            max-width: 100%
            position: relative
            display: block
            & td 
                border: 0
                display: flex
                width: auto
                justify-content: space-between
                text-align: right
                border-bottom: 1px solid #f5f5f5
                &:before 
                    content: attr(data-label)
                    font-weight: 600
                    padding-right: 0.5em
                    text-align: left
                & .table-menu
                    text-align: left
</style>
