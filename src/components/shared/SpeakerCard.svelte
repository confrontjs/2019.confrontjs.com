<script>
    import SocialMediaIcons from './SocialMediaIcons.svelte';
    import SpeakerTitle from './SpeakerTitle.svelte';
    import Talks from '../../data/talks';

    export let segment = '';
    export let speaker = {};

    function talkFor(speaker) {
        return Talks.find((talk) => {
            return (talk.speaker === speaker);
        });
    }

    const talk = talkFor(speaker);
</script>

<style>
    .speaker-card {
        padding: 20px 40px;
        background: #F7FAFF;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        height: 100%;
        position: relative;
    }

    .speaker {
        padding: 0 0 100px 0;
    }

    .speaker-avatar {
        width: 100%;
        height: auto;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    }

    .social-media-icons {
        margin: 10px 0;
        text-align: center;
    }

    .speaker-details h2 {
        margin: 0;
    }

    .speaker-position {
        font-size: 13px;
        font-weight: normal;
        padding: 0;
        margin: 0;
    }

    .speaker-bio {
        text-align: justify;
    }

    .talk-info {
        color: var(--snow-color);
        background-color: var(--night-color);
        text-transform: uppercase;
        width: 100%;
        padding: 7px 25px;
        height: 100px;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .talk-info h3,
    .talk-info p {
        display: block;
        margin: 0;
        padding: 0;
    }

    :global(.keynote-speaker) {
        color: var(--primary-color);
    }
    :global(.regular-speaker) {
        color: var(--secondary-color);
    }
</style>

<div class="speaker-card">
    <div class="speaker row">
        <div class="speaker-images col-4 pl-0">
            <a
                href="{ speaker.contact.twitter_url }"
                title="{ speaker.name }"
            >
                <img
                    src="{ speaker.avatarUrl }"
                    class="speaker-avatar"
                    alt="Avatar of { speaker.name }"
                />
            </a>
            <div class="social-media-icons">
                <SocialMediaIcons person={speaker}/>
            </div>
        </div>

        <div class="speaker-details col-8 pr-0">
            <h2>{ speaker.name }</h2>
            <p class="speaker-position">
                { speaker.position } @ { speaker.company }
            </p>
            <p class="speaker-bio">
                { speaker.bio.en || speaker.bio.pl }
            </p>
        </div>
    </div>

    <div class="talk-info">
        <h3 class="row">
            <SpeakerTitle talk={talk}></SpeakerTitle>
        </h3>
        <p class="row">{ talk.title }</p>
    </div>

</div>
