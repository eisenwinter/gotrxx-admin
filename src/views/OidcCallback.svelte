<script>
    import PageHeader from "../lib/PageHeader.svelte";
    import { callback } from "../api/oidc";
    callback();
</script>

<div class="section">
    <PageHeader title="Authenticating" subtitle="Please wait" />
</div>
