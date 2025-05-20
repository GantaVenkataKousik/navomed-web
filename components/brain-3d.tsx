"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function Brain3D(props) {
  const group = useRef()
  // This is a placeholder - in a real implementation, you would use a proper brain 3D model
  // For this example, we'll create a simple abstract shape that resembles a brain

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.05)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.05)
    }
  })

  return (
    <group ref={group} {...props}>
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#9333ea"
          roughness={0.7}
          metalness={0.2}
          emissive="#4c1d95"
          emissiveIntensity={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh position={[0, 0.2, 0.8]}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.6} metalness={0.3} transparent opacity={0.8} />
      </mesh>
      <mesh position={[0.8, 0.3, 0.3]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#a78bfa" roughness={0.6} metalness={0.3} transparent opacity={0.8} />
      </mesh>
      <mesh position={[-0.7, 0.4, 0.5]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#c4b5fd" roughness={0.6} metalness={0.3} transparent opacity={0.8} />
      </mesh>
    </group>
  )
}

