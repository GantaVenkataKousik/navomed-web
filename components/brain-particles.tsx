"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { PointMaterial } from "@react-three/drei"

interface BrainParticlesProps {
  count?: number
}

export function BrainParticles({ count = 1000 }: BrainParticlesProps) {
  const points = useRef<THREE.Points>(null)

  // Generate points in a brain-like shape
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Create a brain-like shape using parametric equations
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      // Base sphere
      let r = 4 + Math.random() * 1.5

      // Add some randomness to create a more organic shape
      if (Math.random() > 0.8) {
        r *= 0.8 // Some points closer to center
      }

      // Slightly elongate in y direction for brain shape
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta) * 1.2
      const z = r * Math.cos(phi)

      positions[i3] = x
      positions[i3 + 1] = y
      positions[i3 + 2] = z
    }

    return positions
  }, [count])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.05

      // Subtle pulsing effect
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.03
      points.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#26a69a"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

