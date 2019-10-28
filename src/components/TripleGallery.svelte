<style>
.triple-gallery {
    display: flex;
    height: 320px;
}
.triple-gallery :global(img) {
    width: 33%;
}
</style>

<div class="triple-gallery">
    <slot></slot>
</div>
