import { writable } from 'svelte/store';

let stored = null;
if (localStorage.settings) {
    stored = JSON.parse(localStorage.settings)
}
export const settingStore = writable(stored || {
    oidcSettings: null,
    instanceUrl: null,
    clientId: null
});
settingStore.subscribe((value) => localStorage.settings = JSON.stringify(value))


let oidc = null;
if (sessionStorage.oidcRecovery) {
    oidc = JSON.parse(sessionStorage.oidcRecovery)
}
export const oidcStore = writable(oidc || {
    isAuthenticated: false,
    user: null,
    accessToken: null,
    accessTokenExpires: null,
    scopes: null
})
oidcStore.subscribe((value) => sessionStorage.oidcRecovery = JSON.stringify(value))

export const notifications = writable({
    messages: [] 
})

export const loadingIndicator = writable(false)