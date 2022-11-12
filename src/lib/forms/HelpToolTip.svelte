<script>
    import QuestionIcon from "../icons/QuestionIcon.svelte";
    export let message = ''
    let toggle = false 
    const toggleHelp = () => {
        toggle = !toggle
    }
</script>

<div class="question-helper" on:click={toggleHelp}> 
    <div class="icon-format"> 
        <QuestionIcon fill="#777"/>  
    </div>
    {#if toggle}
    <div class="help-pos">
        <div class="help-dropdown"> 
            <div class="help-content has-text-white-ter"> 
                {@html message}
            </div>
        </div>
    </div>
    {/if}
</div>


<style lang="sass">
.question-helper
    cursor: pointer
    width: fit-content
    margin-left: 0.2rem
    .icon-format
        width: 0.75rem
        height: 0.75rem
.help-pos
    position: absolute
    z-index: 30 
.help-dropdown
    max-width: 250px
    position: relative
    transform: translate(-6px, 15px)
    user-select: none
    background-color: #24292f
    border-radius: 3px
    &::before
        left: 0.29rem
        content: ""
        position: absolute
        top: -0.25rem
        display: block
        background: inherit
        width: 14px
        height: 14px
        transform: rotate(45deg)
        transform-origin: center
        border: 1px solid
        border-color: inherit
        clip: rect(0,9px,9px,0)
    & .help-content
        padding: 0.5rem 0.75rem 
        text-align: inherit
        background-color: transparent
        border: 0
        clear: both
</style>