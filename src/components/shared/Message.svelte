<style>
    .message {
        background: var(--dark-color);
        padding: 50px;
        color: var(--snow-color);
    }

    .message :global(h2) {
        font-size: 36px;
    }
    .message :global(p) {
        font-size: 24px;
        font-weight: lighter;
    }
</style>

<div class="message">
    <div class="content">
        <slot name="header"></slot>
        <slot name="body"></slot>
    </div>
</div>
