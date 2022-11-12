<script>
    import {  fly } from 'svelte/transition';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    import CheckIcon from "./icons/CheckIcon.svelte"
    import AlertIcon from "./icons/AlertIcon.svelte"
    export let type = ""
    export let light = false
    export let autoCloseDuration = 0
    export let isClosed = false 

    export let title = ""
    export let content = ""

    export let msg = null

    const close = () => {
        if(msg != null){
            dispatch('feedback-closed', {
			item: msg
		});
        }
        isClosed = true
    }

    let progress = undefined
        if(autoCloseDuration > 0 ){
            progress = tweened(0, {
            duration: autoCloseDuration,
            easing: cubicOut
        });
        progress.set(100).then(close)
    }



</script>
{#if !isClosed}
<div class="notification {type ? `is-${type}` : ''} {light ? 'is-light' : '' }" out:fly={{y: 30}}>
    <button class="delete" on:click={close}></button>
    <div class="columns"> 
        <div class="column is-narrow has-text-centered is-flex is-align-items-center is-justify-content-center">
            {#if type}
                {#if type == "danger"}
                <AlertIcon size="large" type={type}></AlertIcon>
                {/if}
                {#if type == "success"}
                <CheckIcon size="large" type={type}></CheckIcon>
                {/if}
            {/if}
        </div>
        <div class="column"> 
            <div class="columns is-multiline"> 
         
                <div class="column is-12 has-text-grey"> 
                    <h3 class="is-size-5 has-text-weight-semibold has-text-centered-mobile">{title}</h3>
                    {@html content}
                </div>
            </div>
        </div>
    </div>
    {#if progress != undefined}
        <progress class="progress progress-sticky" value="{$progress}" max="100"></progress>
    {/if}
</div>
{/if}

<style lang="sass">#first line fix for now 
.progress-sticky
    position: absolute
    bottom: 0
    left: 0
    height: 5px
    border-radius: 0

</style>