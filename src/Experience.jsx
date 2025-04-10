import { PresentationControls, Float, Environment, useGLTF} from '@react-three/drei'


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

    
        <PresentationControls
            global
        >  {/* Allows user to drag computer globally */}
            <Float rotationIntensity={ 0.4 }> {/* Makes computer float with smaller rotation*/}
            <primitive                      // Insert non-React Three.js object into scene
                object={ computer.scene }   // Display computer in scene
                position-y={ - 1.2 }        // Position computer near center of screen
            />
            </Float>
        </PresentationControls>
    </>
}
