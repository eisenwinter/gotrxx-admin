<script>
	import dayjs from "dayjs";
	import {replace} from 'svelte-spa-router'
	import NavBar from "./lib/NavBar.svelte";
	import FeedbackBar from "./lib/FeedbackBar.svelte";
	import _ from "./styles/setup.sass";
	import routes from "./routes";
	import Router from "svelte-spa-router";
	import { settingStore, oidcStore, loadingIndicator } from "./store.js";
	import InstanceSelector from "./lib/InstanceSelector.svelte";
	import LoadingIndicator from "./lib/LoadingIndicator.svelte";
	let instanceSet = false;
	let instanceUrl = "";
	let instanceClientId = "";

	let expires = null;
	let signedIn = false;
	settingStore.subscribe((v) => {
		if (v.instanceUrl !== null) {
			instanceSet = true;
			instanceClientId = v.clientId;
			instanceUrl = v.instanceUrl;
		}
	});
	oidcStore.subscribe((v) => {
		signedIn = v.isAuthenticated;
		expires = dayjs.unix(v.accessTokenExpires).format("YYYY-MM-DD HH:mm");
	});
	let isLoading = false;
	loadingIndicator.subscribe((v) => {
		isLoading = v;
	});
	const resetInstance = () => {
		oidcStore.update((u) => {
			return {
				isAuthenticated: false,
				user: null,
				accessToken: null,
				accessTokenExpires: null,
				scopes: null,
			};
		});
		settingStore.update((u) => {
			return {
				oidcSettings: null,
				instanceUrl: null,
				clientId: null,
			};
		});
		instanceUrl = "";
		instanceClientId = "";
		instanceSet = false;
		replace(`${import.meta.env.BASE_URL}`)
	};
	let isOidcPage =
		window.location.hash == "#/oidc-callback" ||
		window.location.hash != "#/silent-renew";
</script>

<main class={isLoading ? "is-blured" : ""}>
	{#if instanceSet}
		<NavBar {signedIn} {instanceUrl} />
		<div class="container">
			<div class="section feedback-bar">
				<FeedbackBar />
			</div>
		</div>
		{#if signedIn || isOidcPage}
			<div class="container">
				<Router {routes} />
			</div>
		{/if}
		<footer class="footer-line">
			<div class="has-text-centered block">
				<strong>Authenticated</strong>
				{signedIn}
				{#if signedIn}
					- <strong>Expires</strong>
					{expires}
				{/if}
				- <strong>URL</strong>
				{instanceUrl} - <strong>Client ID</strong>
				{instanceClientId}
				<button on:click={resetInstance} class="delete is-small" />
			</div>
		</footer>
	{:else}
		<InstanceSelector />
	{/if}
</main>
{#if isLoading}
	<LoadingIndicator />
{/if}


<style lang="sass">
.feedback-bar
	position: absolute
	z-index: 999
	padding-top: 0
.is-blured
	filter: blur(0.2rem)
</style>
