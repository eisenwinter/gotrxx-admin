<script>
import { notifications } from "../store.js";
import Feedback from "../lib/Feedback.svelte"
let messages = []

const removeNotification = (ev) => {
   const item =  ev.detail.item;
    notifications.update(u => {
        u.messages = u.messages.filter(f => f != item)
        return u
    })
}

notifications.subscribe(s => {
    messages = s.messages
});
</script>


{#each messages as m}
<Feedback on:feedback-closed={removeNotification} msg={m} type={m.type} content={m.body} title="{m.title}" autoCloseDuration={m.duration}></Feedback>
{/each}