<script>
  import HelpToolTip from "./HelpToolTip.svelte";
  export let horizontal = false;
  export let label = "";
  export let help = "";
  export let helpTooltip = null;
  export let error = "";
  export let grouped = false;
</script>

{#if horizontal}
  <div class="field is-horizontal">
    <div class="field-label {grouped ? 'is-grouped' : ''} is-normal">
      <label for="" class="label">{label}</label>
      {#if helpTooltip}
        <HelpToolTip bind:message={helpTooltip} />
      {/if}
    </div>
    <div class="field-body">
      <div class="field">
        <slot />
        {#if help && help.length > 0}
          <p class="help">{help}</p>
        {/if}
        {#if error && error.length > 0}
          <p class="help is-danger">{error}</p>
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div class="field {grouped ? 'is-grouped' : ''}">
    <div class="is-flex">
      {#if label && label.length > 0}
        <label for="" class="label">{label}</label>
      {/if}
      {#if helpTooltip}
        <HelpToolTip bind:message={helpTooltip} />
      {/if}
    </div>
    <slot />

    {#if help && help.length > 0}
      <p class="help">{help}</p>
    {/if}
    {#if error && error.length > 0}
      <p class="help is-danger">{error}</p>
    {/if}
  </div>
{/if}
