<script>
// @ts-nocheck
    import {outside} from './outside.js';
    let toggled = false 
    export let size = ""
    export let right = false
    const handleClickOutside = () => {
        toggled = false
    }
</script>
<div  use:outside  on:click_outside={handleClickOutside} class="dropdown {right ? ' is-right' : ''} {toggled ? 'is-active' : ''}">
    <div class="dropdown-trigger">
      <button class="button {size}" aria-haspopup="true" on:click={() => toggled = !toggled}>
        <slot name="content" ></slot>
      </button>
    </div>
    <div class="dropdown-menu"  role="menu">
      <div class="dropdown-content">
        
        <slot></slot>
      </div>
    </div>
  </div>
