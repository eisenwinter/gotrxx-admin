<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import Field from "./forms/Field.svelte";
  import Control from "./forms/Control.svelte";
  import PlusIcon from "./icons/PlusIcon.svelte";
  import MinusIcon from "./icons/MinusIcon.svelte";

  const dispatch = createEventDispatcher();

  export let item = {
    op: "AND",
    filters: [{
      selector: null,
      comparator: null, 
      value: null
    }],
    children: [],
  };
  export let indent = 0;

  let showFilterSelector = false;


  const addChild = () => {
    item.children.push({
      op: "AND",
      filters: [{
      selector: null,
      comparator: null, 
      value: null
    }],
      children: [],
    });
    item.children = item.children;
  };
  const addFilter = () => {
    item.filters.push({
      selector: null,
      comparator: null, 
      value: null
    });
    item.filters = item.filters;
  };

  const toggleFilterSelector = () => {
    showFilterSelector = !showFilterSelector;
  };

  const updateFilterOperation = (op) => () => {
    item.op = op;
    showFilterSelector = false;
  };

  const removeFilter = (fi) => () => {
    item.filters = item.filters.filter((f) => f != fi);
  };

  const removeChild = (ev) => {
    const child = ev.detail;
    const c = item.children.find((f) => f == child);
    if (c != null) {
      item.children = item.children.filter((f) => f != child);
    } else {
      dispatch("child-removal-requested", child);
    }
  };

  const removeOperator = () => {
    dispatch("child-removal-requested", item);
  };
</script>
{#if indent == 0}
<pre>{JSON.stringify(item)}</pre>
{/if}
<div class="filterbuilder">
  <ul>
    <li
      class="filter-entry {indent == 0 ? 'is-root' : ''} {indent % 2 === 0 ? 'is-odd' : ''}"
      style="padding-left: {indent + 9}px"
    >
      <div class="is-flex is-justify-content-flex-end">
        <button class="button is-text" on:click={addChild}
          ><PlusIcon size="xsmall" /> <span>Add Operator</span></button
        >
        {#if indent > 0}
          <button class="button is-text" on:click={removeOperator}
            ><MinusIcon size="xsmall" /> <span>Remove Operator</span></button
          >
        {/if}
        <button class="button is-text" on:click={addFilter}
          ><PlusIcon size="xsmall" /> <span>Add Filter</span></button
        >
      </div>

      <div class="filter-group is-flex is-align-items-center">
        <div class="filter-op is-flex is-flex-direction-column">
          {#if showFilterSelector}
            <button
              class="button"
              on:click={updateFilterOperation("AND")}
              transition:fly={{ y: 20, duration: 200 }}
            >
              AND
            </button>
          {/if}
          <span class="button is-primary" on:click={toggleFilterSelector}
            >{item.op}</span
          >
          {#if showFilterSelector}
            <button
              class="button"
              on:click={updateFilterOperation("OR")}
              transition:fly={{ y: -20, duration: 200 }}
            >
              OR
            </button>
          {/if}
        </div>
        <div class="filters">
          {#each item.filters as filter}
            <div class="filter is-flex">
              <Field>
                <Control>
                  <div class="select">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </Control>
              </Field>
              <Field>
                <Control>
                  <div class="select">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </Control>
              </Field>
              <Field>
                <Control>
                  <input class="input" type="text" placeholder="Text input" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <button class="delete" on:click={removeFilter(filter)} />
                </Control>
              </Field>
            </div>
          {/each}
        </div>
      </div>
      {#each item.children as child}
        <svelte:self
          bind:item={child}
          on:child-removal-requested={removeChild}
          indent={indent + 1}
        />
      {/each}
    </li>
  </ul>
</div>

<style lang="sass">
$even-color: #f5bc5f
$odd-color: #5fc1f5
.filterbuilder
  .filter-entry
      padding-bottom: 24px
      margin-left: 9px
      border-left: 2px solid $even-color
      border-radius: 10px
      background-color: lighten($even-color, 30%)
      &.is-root
        margin-left: 0
      &.is-odd 
        border-left-color: $odd-color
        background-color: lighten($odd-color, 30%) 
  .filter-op
    margin-right: 22px
    // margin-bottom: 19px
  .filter-group
    margin-left: 10px
</style>
