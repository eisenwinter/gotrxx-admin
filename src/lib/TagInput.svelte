<script>
  import { fly } from "svelte/transition";
  export let queryProvider = null;
  export let selectedItems = [];
  export let selectedValues = [];
  export let display = null;
  export let valueProperty = null;
  export let placeholder = "";
  export let notFoundText = "No results found";
  export let tagClass = "";
  export let onBeforeDelete = async (item) => true;
  export let onBeforeAdd = async (item) => true;
  export const Reset = () => {
    selectedItems = [];
    selectedValues = [];
  };

  let loading = false;
  let matches = [];
  let input = "";
  const removeTag = (t) => async () => {
    let item = selectedItems.find((f) => f == t);
    if (item) {
      let process = await onBeforeDelete(item);
      if (process) {
        selectedItems = selectedItems.filter((f) => f != t);
        if (valueProperty) {
          selectedValues = selectedItems.map((f) => f[valueProperty]);
        } else {
          selectedValues = selectedItems;
        }
      }
    }
  };
  const addTag = (t) => async () => {
    let process = await onBeforeAdd(t);
    if (process) {
      selectedItems = [...selectedItems, t];
      input = "";
      if (valueProperty) {
        selectedValues = selectedItems.map((f) => f[valueProperty]);
      } else {
        selectedValues = selectedItems;
      }
    }
  };
  const query = async () => {
    if (queryProvider !== null) {
      if (input) {
        loading = true;
        matches = await queryProvider.query(input);
        loading = false;
      } else {
        matches = [];
      }
    }
  };
</script>

<div class="tags-input is-filter is-active">
  {#each selectedItems as item}
    <span class="tag is-rounded {tagClass}">
      {#if $$slots.tag}
        <slot {item} name="tag" />
      {:else if display}
        {item[display]}
      {:else}
        {item}
      {/if}
      <div class="delete is-small" on:click={removeTag(item)} />
    </span>
  {/each}
  <input
    class="input"
    type="text"
    {placeholder}
    bind:value={input}
    on:keyup={query}
  />
  {#if input.length > 0}
    <div class="dropdown-menu" role="menu">
      <div
        class="dropdown-content {loading ? 'is-loading' : ''}"
        in:fly={{ y: -30 }}
      >
        {#if matches.length == 0 && input.length > 0}
          <span class="dropdown-item empty-title">{notFoundText}</span>
        {/if}
        {#each matches as match}
          <div on:click={addTag(match)} class="dropdown-item">
            {#if $$slots.default}
              <slot {match} />
            {:else if display}
              {match[display]}
            {:else}
              {match}
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
