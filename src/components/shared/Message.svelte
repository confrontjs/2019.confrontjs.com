<style>
    .message {
        background: var(--dark-color);
        color: var(--snow-color);
        position: relative;
        display: inline-block;
        width: 100%;
        padding: 50px 0 60px;
    }

    .message :global(p) {
        font-weight: lighter;
    }

    @media (min-width: 801px) {
        .message {
            padding: 0px 0 120px 0;
        }
    }

</style>

<div class="message">
    <div class="container">
        <slot name="header"></slot>
        <slot name="body"></slot>
    </div>
</div>
