<script>
    export let talk = {};

    function getClass() {
        return talk.keynote
            ? 'keynote-speaker'
            : (talk.lightningTalk ? 'lightning-talk-speaker' : 'regular-speaker');
    }

    function getTitle() {
        return talk.keynote
            ? 'Keynote Speaker'
            : (talk.lightningTalk ? 'Lightning talk speaker' : 'Speaker');
    }
</script>

<span class="{ getClass() }">
    { getTitle() }
</span>
