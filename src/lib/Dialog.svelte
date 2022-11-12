<svelte:options accessors={true} />

<script>
    import { createEventDispatcher, onMount, tick } from "svelte";
    import { fade } from 'svelte/transition';

    import QuestionIcon from "./icons/QuestionIcon.svelte";

    export let title = "";
    export let message = "";
    export let focusOn = "confirm";
    export let confirmText = "OK";
    export let cancelText = "Cancel";
    export let showCancel = true;
    export let active = true;

    const dispatch = createEventDispatcher();
    let cancelButton;
    let confirmButton;
    let resolve;
    export let promise = new Promise((r) => (resolve = r));
    onMount(async () => {
        await tick();
        if (focusOn === "cancel" && showCancel) {
            cancelButton.focus();
        } else {
            confirmButton.focus();
        }
    });

    const cancel = () => {
        resolve(false);
        close();
    };

    const close = () => {
        resolve(false);
        active = false;
        dispatch("destroy");
    };

    const confirm = async () => {
        resolve(true);
        close();
    };

    const keydown = (e) => {
        if (active && e.keyCode == 27) {
            close();
        }
    };
</script>

<svelte:window on:keydown={keydown} />
{#if active}
    <div class="dialog modal is-active" >
        <div class="modal-background" on:click={close} />
        <div class="modal-card dialog-card" in:fade out:fade >
            <section class="modal-card-body dialog-card-body is-flex">
                <div class="columns">
                    <div
                        class="column is-narrow has-text-centered is-flex is-align-items-center is-justify-content-center"
                    >
                        <QuestionIcon type="primary" size="large" />
                    </div>
                    <div class="column">
                        {#if title}
                            <p class="is-size-5 has-text-weight-bold">
                                {title}
                            </p>
                        {/if}
                        <div class="has-text-black">
                            {@html message}
                        </div>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot dialog-foot is-justify-content-space-between">
                <div>
                    {#if showCancel}
                        <button
                            type="button"
                            class="button is-primary is-light"
                            bind:this={cancelButton}
                            on:click={cancel}
                        >
                            <span> {cancelText}</span>
                        </button>
                    {/if}
                </div>
                <div>
                    <button
                        type="button"
                        class="button is-danger"
                        on:click={confirm}
                        bind:this={confirmButton}
                    >
                        <span> {confirmText}</span>
                    </button>
                </div>
            </footer>
        </div>
    </div>
{/if}

<style lang="sass">
.dialog-card
    border-radius: 4px
    max-width: 500px
    width: auto
.dialog-card-body
    padding: 1.5rem
.dialog-foot
    padding-bottom: 0.8em
</style>
