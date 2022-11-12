<script>
  export let name = "";
  export let value = "";
  export let placeholder = "";
  export let queryProvider = null;
  let matches = [];
  let activeElement = null;

  const handleMouseEnter = (i) => () => {
    activeElement = i;
  };

  const handleMouseLeave = (i) => () => {
    activeElement = null;
  };

  const query = async () => {
    if (queryProvider !== null) {
      if (value) {
        matches = await queryProvider
          .query(value);
      } else {
        matches = [];
      }
    }
  };

  const handleSelection = (event, match) => {
    value = match;
    activeElement = null;
    matches = [];
  };
</script>

<div class={`dropdown ${matches && matches.length > 0 ? "is-active" : ""}`}>
  <div class="dropdown-trigger">
    <input
      type="text"
      class="input"
      {name}
      bind:value
      {placeholder}
      on:keyup={query}
    />
  </div>
  <div class="dropdown-menu">
    {#if matches}
      <div class="dropdown-content">
        {#each matches as match, i}
          <!-- svelte-ignore a11y-missing-attribute -->
          <a
            on:mouseenter={handleMouseEnter(i)}
            on:mouseleave={handleMouseLeave(i)}
            class="dropdown-item  {i === activeElement ? 'is-active' : ''}"
            on:click={(event) => handleSelection(event, match)}
          >
            {match}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</div>

