<header>
    <nav class="level">
            <div class="level-left">
                <div class="level-item">
                    <div>
                        <p class="heading has-text-light">{title}</p>
                        <p class="title has-text-light">{subtitle}</p>
                    </div>
                </div>
            </div>

            <div class="level-right">
                <p class="level-item">
                    <slot></slot>
                </p>
            </div>
        </nav>
        <br />
</header>


<script>
	export let title = 'Hello World';
    export let subtitle = 'Hello World';
</script>
