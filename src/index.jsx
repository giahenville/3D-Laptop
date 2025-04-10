// Import global styles
import './style.css'

// Import ReactDom to render the app
import ReactDOM from 'react-dom/client'

// Import the Canvas component from React Three Fiber
// This replaces the traditional WebGLRenderer in Three.js
import { Canvas } from '@react-three/fiber'

// Import the Experience component, where 3D objects and logic live
import Experience from './Experience.jsx'

// Create a root container and attach the React app to the HTML element with id="root"
const root = ReactDOM.createRoot(document.querySelector('#root'))

// Render the <Canvas /> to display a 3D scene
root.render(
    <Canvas
        className='r3f' 
        // Set up camera with custom properties
        camera={ {
            fov: 45,                    // Field of view (angle of the camera's lens)
            near: 0.1,                  // How close something can be before it's clipped
            far: 2000,                  // How far something can be before it's clipped
            position: [ -3, 1.5, 4 ]    // Initial position of the camera in 3D space
        } }
    >
        {/* Render the Experience component inside the 3D canvas */}
        <Experience />
    </Canvas>
)
