<script>
  import { logout, login } from "./../api/oidc"
  let toggle = false
  export let instanceUrl = ""
  export let signedIn = false

  const logoutRequested = async () => {
    await logout()
  }

  const loginRequested = async () => {
    await login()
  }
</script>
<nav class="navbar is-extended is-primary">
  <div class="navbar-brand">
    <a class="navbar-item" href="#/">
      <strong>gotrxx admin</strong>
    </a>
    <div class="navbar-burger" on:click={() => toggle = !toggle} >
      <span />
      <span />
      <span />
    </div>
  </div>

  <div class="navbar-menu {toggle ? 'is-active' : ''}">
    {#if signedIn}
    <div class="navbar-start">
      <a href="#/applications" class="navbar-item"> Applications </a>
      <!-- <a href="#/authorizations" class="navbar-item"> Authorizations </a> -->
      <a href="#/users" class="navbar-item"> Users </a>
      <a href="#/roles" class="navbar-item"> Roles </a>
      <a href="#/invites" class="navbar-item"> Invites </a>
    </div>
    {/if}
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          {#if signedIn}
          {#if instanceUrl}
          <a href={instanceUrl + '/account/'} target="_blank" class="button button is-light">
            <span> Account </span></a
          >
          {/if}
          <button type="button" class="button is-light" on:click={logoutRequested}>
            <span> Log out </span></button
          >
          {:else}
          <button type="button" class="button is-light" on:click={loginRequested}>
            <span> Log in </span></button
          >
          {/if}
        </div>
      </div>
    </div>
  </div>
</nav>
