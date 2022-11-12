<script>
    import {
    UserManager
} from 'oidc-client-ts';
import {
    get
} from 'svelte/store';
import {
    settingStore
} from "../store"

new UserManager(get(settingStore).oidcSettings).signinSilentCallback()
        .catch((err) => {
            console.log('silent renew', err);
        });
</script>
