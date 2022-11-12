<script>
	import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let total = 0;
    export let pageSize = 12;
    export let currentPage = 1;
    let before = 1;
    let lastPage =   Math.ceil(total / pageSize)
    let after = 1;
    let pagesInRage = [];
    $: {
        pagesInRage = [];
        let left = Math.max(1, currentPage - before);
        if (left - 1 === 2) {
            left--;
        }
        const count =  Math.ceil(total / pageSize)
        lastPage = count
        let right = Math.min(currentPage + after,  count);
        if (count - right === 2) {
            right++;
        }

        for (let i = left; i <= right; i++) {
            pagesInRage.push(i);
        }
    }

    const changePage = (page) =>{
        dispatch('page-changed', {
			page: page
		});
    }

    const next = () => {
        dispatch('page-changed', {
			page: currentPage + 1
		});
    }

    const prev = () => {
        dispatch('page-changed', {
			page: currentPage - 1
		});
    }
</script>

<nav class="pagination">
    <button
        disabled={currentPage === 1 || null}
        class="pagination-link pagination-previous"
        on:click={prev}
    >
        &lt;
    </button><button
        disabled={currentPage === lastPage || null}
        class="pagination-link pagination-next"
        on:click={next}
    >
        &gt;
    </button>
    <div class="control pagination-input" />
    <ul class="pagination-list">
        {#each pagesInRage as page}
            <li>
                <button
                    on:click={() => changePage(page)}
                    aria-current="true"
                    class="pagination-link {page === currentPage
                        ? 'is-current'
                        : ''} ">{page}</button
                >
            </li>
        {/each}
    </ul>
</nav>
