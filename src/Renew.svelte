<script>
    import {
    UserManager, Log
} from 'oidc-client-ts';
import {
    get
} from 'svelte/store';
import {
    settingStore
} from "./store"

new UserManager(get(settingStore).oidcSettings).signinSilentCallback()
        .catch((err) => {
            console.log(err);
        });
</script>
