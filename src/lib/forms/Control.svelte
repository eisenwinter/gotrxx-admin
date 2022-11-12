<script>
    export let expanded = false 
</script>

<div class="control {expanded ? 'is-expanded' : ''}">
    <slot></slot>
</div>
