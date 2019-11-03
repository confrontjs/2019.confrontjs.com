<script>
    export let talk = {};

    function getClass() {
        if(talk.keynote)
            return 'keynote-speaker';

        if(talk.lightningTalk)
            return 'lightning-talk-speaker';

        return 'regular-speaker';
    }

    function getTitle() {
        if(talk.keynote)
            return 'Keynote Speaker';

        if(talk.lightningTalk)
            return 'Lightning talk speaker';

        return 'Speaker';
    }
</script>

<span class="{ getClass() }">
    { getTitle() }
</span>
