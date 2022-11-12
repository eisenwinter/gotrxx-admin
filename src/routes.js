import Home from './views/Home.svelte'
import {wrap} from 'svelte-spa-router/wrap'
export default {
    // Exact path
    '/': Home,
    '/applications':  wrap({
        asyncComponent: () => import('./views/Applications.svelte')
    }),
    '/authorizations':  wrap({
        asyncComponent: () => import('./views/Authorizations.svelte')
    }),
    '/users':  wrap({
        asyncComponent: () => import('./views/Users.svelte')
    }),
    '/roles':  wrap({
        asyncComponent: () => import('./views/Roles.svelte')
    }),
    '/invites':  wrap({
        asyncComponent: () => import('./views/Invites.svelte')
    }),
    '/oidc-callback':  wrap({
        asyncComponent: () => import('./views/OidcCallback.svelte')
    }),
    '/silent-renew':  wrap({
        asyncComponent: () => import('./views/OidcSilentRenew.svelte')
    }),
    // Catch-all
    // This is optional, but if present it must be the last
    '*':  wrap({
        asyncComponent: () => import('./views/NotFound.svelte')
    })
}