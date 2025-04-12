import * as THREE from 'three'
import { useMemo } from 'react'
import { Points, PointMaterial } from '@react-three/drei'

export default function Particles() {
  const particles = useMemo(() => {
    const positions = new Float32Array(5000 * 3) // 5000 particles
    for (let i = 0; i < 5000 * 3; i++) {
      // Create a cloud around the model, avoiding the laptop area
      positions[i] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  return (
    <Points positions={particles} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}


