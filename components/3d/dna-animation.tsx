"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

export function DNAStrand({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef()

  // Create the DNA strand
  const dnaGeometry = useMemo(() => {
    const group = new THREE.Group()

    // Parameters for the DNA helix
    const radius = 2
    const height = 20
    const turns = 4
    const pointsPerTurn = 30
    const backboneRadius = 0.2
    const baseRadius = 0.1

    // Create the two backbones (helices)
    for (let helix = 0; helix < 2; helix++) {
      const points = []
      const angleOffset = helix * Math.PI

      for (let i = 0; i <= turns * pointsPerTurn; i++) {
        const angle = (i / pointsPerTurn) * Math.PI * 2
        const x = radius * Math.cos(angle + angleOffset)
        const y = (i / (turns * pointsPerTurn)) * height - height / 2
        const z = radius * Math.sin(angle + angleOffset)

        points.push(new THREE.Vector3(x, y, z))
      }

      const curve = new THREE.CatmullRomCurve3(points)
      const tubeGeometry = new THREE.TubeGeometry(curve, turns * pointsPerTurn, backboneRadius, 8, false)
      const material = new THREE.MeshStandardMaterial({
        color: helix === 0 ? "#26a69a" : "#4299e1",
        roughness: 0.3,
        metalness: 0.7,
      })

      const tube = new THREE.Mesh(tubeGeometry, material)
      group.add(tube)
    }

    // Create the base pairs (connections between the helices)
    for (let i = 0; i < turns * 10; i++) {
      const angle = (i / (turns * 10)) * Math.PI * 2 * turns
      const y = (i / (turns * 10)) * height - height / 2

      const x1 = radius * Math.cos(angle)
      const z1 = radius * Math.sin(angle)

      const x2 = radius * Math.cos(angle + Math.PI)
      const z2 = radius * Math.sin(angle + Math.PI)

      const baseGeometry = new THREE.CylinderGeometry(baseRadius, baseRadius, radius * 2, 8)
      baseGeometry.rotateZ(Math.PI / 2)
      baseGeometry.translate(0, y, 0)

      // Rotate to align with the angle
      baseGeometry.rotateY(angle)

      const baseMaterial = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? "#80cbc4" : "#90cdf4",
        roughness: 0.4,
        metalness: 0.6,
      })

      const base = new THREE.Mesh(baseGeometry, baseMaterial)
      group.add(base)
    }

    return group
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} position={position}>
      <primitive ref={groupRef} object={dnaGeometry} scale={scale} rotation={rotation} />
    </Float>
  )
}

export function DNAAnimation() {
  return (
    <>
      <DNAStrand position={[-10, 0, -15]} rotation={[0.5, 0, 0.2]} scale={0.8} />
      <DNAStrand position={[15, 5, -20]} rotation={[-0.3, 0.5, 0]} scale={0.6} />
      <DNAStrand position={[0, -10, -25]} rotation={[0.2, -0.3, 0.1]} scale={0.7} />
    </>
  )
}

