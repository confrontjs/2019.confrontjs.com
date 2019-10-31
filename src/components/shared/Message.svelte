<style>
    .message {
        background: var(--dark-color);
        color: var(--snow-color);
        padding: 0 0 100px 0;
    }

    .message :global(p) {
        font-weight: lighter;
    }
</style>

<div class="message">
    <div class="content">
        <slot name="header"></slot>
        <slot name="body"></slot>
    </div>
</div>
