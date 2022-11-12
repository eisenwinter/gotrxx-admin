<script>
    import axios from 'axios'
    import client from "../api/client";
    import {register} from "../api/oidc";
    import { settingStore } from "../store.js";
    import Feedback from "./Feedback.svelte";
    import { loadingIndicator } from "../store"
    let url = "http://localhost:5000";
    let client_id = "gotrxxadmin";

    let feedback = {
        visible: false,
        title: "",
        content: "",
    };

    register()
    async function setInstance() {
        loadingIndicator.set(true);
        try {
            const res = await axios.get(`${url}/manage/.ping`);
            const storeObj = {
                instanceUrl: url,
                clientId: client_id,
                oidcSettings: {
                    authority: url,
                    client_id: client_id,
                    redirect_uri: `${window.location.origin}/oidc-callback`,
                    response_type: "code",
                    scope: "offline_access", //refresh tokens
                    filterProtocolClaims: true,
                    loadUserInfo: false,
                    automaticSilentRenew: true,
                    silent_redirect_uri: `${window.location.origin}/silent-renew`
                },
            };

            settingStore.update((_) => storeObj);
        } catch {
            feedback.visible = true;
            feedback.title = "Instance unreachable";
            feedback.content = `<p><strong>${url}</strong> could not be reached. Either your instance is not running or you didnt configure the manage endpoint.</p>`;
        }
        loadingIndicator.set(false)
    }
</script>

<section class="section">
    {#if feedback.visible}
    <Feedback type="danger" title={feedback.title} content={feedback.content} />
    {/if}
    <div class="card">
        <div class="card-content">
            <h1 class="has-text-centered has-text-weight-bold mt-1 mb-4">
                Please configure your instance
            </h1>
            <div class="columns">
                <div class="column is-2">
                    <div class="field">
                        <label for="clientId" class="label">Client ID</label>
                        <div class="control">
                            <input
                                id="clientId"
                                class="input"
                                type="text"
                                bind:value={client_id}
                            />
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="field">
                        <label for="baseUrl" class="label">Base URL</label>
                        <div class="control">
                            <input
                                id="baseUrl"
                                class="input"
                                type="text"
                                bind:value={url}
                            />
                        </div>
                    </div>
                </div>
                <div class="column is-1 is-flex is-align-items-flex-end">
                    <button
                        on:click={setInstance}
                        class="button is-link is-fullwidth">Set</button
                    >
                </div>
            </div>
        </div>
    </div>
</section>
