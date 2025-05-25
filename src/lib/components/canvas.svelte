<script lang="ts">
    import { Canvas } from '@threlte/core';
</script>

<style>
    .canvas-container {
        position: fixed;
        inset: 0;
        z-index: -1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        overflow: hidden;
    }

</style>

<div class="canvas-container">
    <Canvas>
        <slot />
    </Canvas>
</div>
