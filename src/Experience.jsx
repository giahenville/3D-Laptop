import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF} from '@react-three/drei'


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

        <color args={ [ '#241a1a']} attach="background" />

        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }   // Limit rotation
            polar={ [ - 0.4, 0.2 ] }        // Limit veritcal drag and drop
            azimuth={ [ -1, 0.75 ] }        // Limit horizontal drag and drop
            config={ { mass: 2, tension: 400 } }    // Tweak animation physics 
            snap                            // Make model go back to initial position when mouse is released
        >  {/* Allows user to drag computer globally */}
            <Float rotationIntensity={ 0.4 }> {/* Makes computer float with smaller rotation*/}
                {/* Add light from computer screen to keyboard and surrounding area */}
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#FFFFFF' }
                    rotation={ [ 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />
                <primitive                      // Insert non-React Three.js object into scene
                    object={ computer.scene }   // Display computer in scene
                    position-y={ - 1.2 }        // Position computer near center of screen
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x= { - 0.256 }
                    > 
                        {/* Add website onto screen */}
                        <iframe src='https://giahenville.github.io/admin-dashboard/'/> 
                    </Html>
                </primitive>
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ 1 }
                    position={ [ 2, 0.75, 0.75 ] }
                    rotation-y= { - 1.25 }
                    maxWidth={ 2 }
                    textAlign='center'
                > 
                Gia Henville
                </Text>
            </Float>
        </PresentationControls>

        {/* Add computer shadow */}
        <ContactShadows 
        position-y={ - 1.4 }
        opacity={ 0.4 }
        scale={ 5 }
        blur={ 2.4 }
        />  
    </>
}
