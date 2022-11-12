<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from 'svelte/transition';
  const dispatch = createEventDispatcher();
  export let padding = true;
  export let closeable = false;

  const requestClose = () => {
    dispatch('card-closed', {});
  }
</script>

<div class="card" in:fly={{y: -30}}>
  {#if $$slots.title || closeable}
    <header class="card-header">
      {#if $$slots.title}
        <p class="card-header-title">
          <slot name="title" />
        </p>
      {/if}
      {#if closeable}
        <button class="card-header-icon" on:click={requestClose}>
          <div class="delete" />
        </button>
      {/if}
    </header>
  {/if}
  <div class="card-content {padding ? '' : 'p-0'}">
    <slot />
  </div>
  {#if $$slots.footer}
    <footer class="card-footer">
      <slot name="footer" />
    </footer>
  {/if}
</div>
