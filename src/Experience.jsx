// Importing OrbitControls and useGLTF from @react-three/drei
// Environment: Adds realistic lighting and reflections to the scene using HDRI or presets
// useGLTF: A hook for loading 3D models in GLTF/GLB format easily into the scene
// OrbitControls: Enables user interaction with the 3D scene (e.g., rotate, zoom, pan the camera)
import { Environment, useGLTF, OrbitControls } from '@react-three/drei'


// Default export for the Experience component
// This component sets up the 3D scene with an interactive camera and simple 3D objects
export default function Experience()
{
    // Load the 3D MacBook model using useGLTF
    // This hook fetches and parses the model from the provided URL, returning a usable 3D object
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return <>

        {/*
        <Environment preset='city' />: 
        adds a pre-configured environmental backdrop to the scene, simulating a cityscape. 
        It automatically adjusts the lighting and background to reflect the city preset.
        */}
        <Environment preset='city' />

        {/*
        Set the entire background color of the 3D scene to a dark reddish-brown. 
        'args' defines color value, and ' attach="background" ' tells React Three Fiber to apply it as the scene background
        */}
        <color args={ [ '#241a1a']} attach="background" />

        {/* 
        OrbitControls allows us to manipulate the camera view. 
        'makeDefault' ensures this control is applied to the scene by default, 
        enabling mouse interactions like rotating, zooming, and panning.
        */}
        <OrbitControls makeDefault />
        
        {/*
        Creating a 3D object in the scene. 
        This is a mesh, which is a combinations of geometry and material
        */}
        <mesh>

            {/*
            boxGeometry defines the shape of the 3D object
            */ }
            <boxGeometry />

            {/*
            meshNormalMaterial applies a basic material to the cube that colors the suface based on its normal direction.
            This creates a simple but visually interesting effect for the object
            */}
            <meshNormalMaterial />
        </mesh>
        
        {/*
        Display the 3D MacBook model in the scene
        'computer.scene' contains the entire model loaded from a GLTF file
        <primitive /> is used to insert non-React Three.js objects directly into the scene

        */}
        <primitive object={ computer.scene }/>
    </>
}
