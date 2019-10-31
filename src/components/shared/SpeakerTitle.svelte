<script>
    export let talk = {};

    function getClass() {
        return talk.keynote
            ? 'keynote-speaker'
            : 'regular-speaker';
    }

    function getTitle() {
        return talk.keynote
            ? 'Keynote Speaker'
            : 'Speaker';
    }
</script>

<span class="{ getClass() }">
    { getTitle() }
</span>
