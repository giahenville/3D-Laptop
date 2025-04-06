// Importing OrbitControls from @react-three/drei
// This allows the user to interact with the 3D scene, like rotating, zooming, and panning the camera
import { OrbitControls } from '@react-three/drei'

// Default export for the Experience component
// This component sets up the 3D scene with an interactive camera and simple 3D objects
export default function Experience()
{
    return <>
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

    </>
}
