import {
    UserManager,
    Log
} from 'oidc-client-ts';
import {
    get
} from 'svelte/store';
import {
    oidcStore,
    settingStore
} from "../store"

let userManager = null

const setupUserManager = (settings) => {
    if (userManager != null) {
        return userManager
    }
    userManager = new UserManager(settings)
    userManager.events.addSilentRenewError(() => {
        console.log('silent renew error')
    })
    userManager.events.addUserLoaded((user) => {
        oidcStore.update(d => {
            const token = parseToken(user.access_token)
            d.isAuthenticated = true
            d.user = token.sub
            d.accessToken = user.access_token
            d.accessTokenExpires = user.expires_at
            d.scopes = user.scope
            return d;
        });

    })
    userManager.events.addUserUnloaded(() => {
        oidcStore.update(_ => {
            return {
                isAuthenticated: false,
                user: null,
                accessToken: null,
                accessTokenExpires: null,
                scopes: null
            }
        })
    })
    // userManager.events.addUserSessionChanged(() => {
    //     console.log('session changed')
    // })
    // userManager.events.addUserSignedIn(() => {
    //     console.log('user signed in')
    // })
    // userManager.events.addUserSignedOut(() => {
    //     console.log('user signed out')
    // })

    return userManager
}

Log.setLogger(console);
settingStore.subscribe(n => {
    oidcStore.update(d => {
        if (n.oidcSettings != null) {
            setupUserManager(n.oidcSettings)
            if (!d.isAuthenticated && window.location.pathname != "/oidc-callback") {
                userManager.signinRedirect()
            }
        }
        return d
    })
});

const register = () => {
    console.log('registering')
}

const login = async () => {
    userManager.signinRedirect()
}

const logout = async () => {
    await userManager.removeUser()
    oidcStore.update(_ => {
        return {
            isAuthenticated: false,
            user: null,
            accessToken: null,
            accessTokenExpires: null,
            scopes: null
        }
    })
}

const parseToken = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

if (window.location.pathname === "/oidc-callback") {
    if (!get(oidcStore).isAuthenticated && get(settingStore).oidcSettings) {
        const userManager = setupUserManager(get(settingStore).oidcSettings)
        if (userManager) {
            userManager.signinRedirectCallback().then(function (user) {
                window.location.replace("/")
            }).catch(err => {
                //proper error handling
                console.log(err)
            })
        }
    }


}


export {
    register,
    logout,
    login
};