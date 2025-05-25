<script lang="ts">
    import { T, useTask} from '@threlte/core';
    import { GLTF, useGltfAnimations } from '@threlte/extras'
    const { gltf } = useGltfAnimations<'All Animations'>()
    let rotationY = 0

    useTask((delta) => {
        rotationY += delta * 0.4
    })
</script>

<T.Group>
    <T.PerspectiveCamera
            makeDefault
            position={[0, 7, 20]}
            lookAt={[-20, 20, 0]}
    >
    </T.PerspectiveCamera>
    <T.DirectionalLight
            position={[3, 10, 7]}
            intensity={Math.PI}
    />
    <T.AmbientLight intensity={0.3} />
    <T.Mesh position.y={1} rotation={[0, rotationY, 0]} >
        <GLTF
                bind:gltf={$gltf}
                url="/src/assets/space.glb"
                scale={5}
        />
    </T.Mesh>

</T.Group>

