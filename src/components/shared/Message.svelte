<style>
    .message {
        background: var(--dark-color);
        color: var(--snow-color);
        padding: 30px;
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
