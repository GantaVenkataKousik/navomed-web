"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

export function MoleculeStructure({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef()

  // Create the molecule structure
  const moleculeGeometry = useMemo(() => {
    const group = new THREE.Group()

    // Parameters for the molecule
    const atomCount = 12
    const atomRadius = 0.8
    const bondRadius = 0.2
    const bondLength = 3

    // Create atoms
    const atomPositions = []
    // Update the molecule colors
    const atomColors = ["#26a69a", "#4299e1", "#80cbc4", "#90cdf4", "#b2dfdb"]

    // Create a central atom
    atomPositions.push(new THREE.Vector3(0, 0, 0))

    // Create surrounding atoms in a 3D structure
    for (let i = 1; i < atomCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = bondLength + Math.random() * 2

      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)

      atomPositions.push(new THREE.Vector3(x, y, z))
    }

    // Add atoms to the group
    atomPositions.forEach((pos, i) => {
      const atomGeometry = new THREE.SphereGeometry(atomRadius, 32, 32)
      const atomMaterial = new THREE.MeshStandardMaterial({
        color: atomColors[i % atomColors.length],
        roughness: 0.2,
        metalness: 0.8,
      })

      const atom = new THREE.Mesh(atomGeometry, atomMaterial)
      atom.position.copy(pos)
      group.add(atom)

      // Create bonds to some other atoms
      if (i > 0) {
        // Connect to central atom
        const bondGeometry = new THREE.CylinderGeometry(bondRadius, bondRadius, pos.length(), 8)
        // Update the bond colors
        const bondMaterial = new THREE.MeshStandardMaterial({
          color: "#e0f2f1",
          roughness: 0.4,
          metalness: 0.3,
        })

        // Position and orient the bond to connect the atoms
        const bond = new THREE.Mesh(bondGeometry, bondMaterial)

        // Calculate the midpoint between atoms
        const midpoint = new THREE.Vector3().addVectors(new THREE.Vector3(0, 0, 0), pos).multiplyScalar(0.5)

        // Set position to midpoint
        bond.position.copy(midpoint)

        // Orient the bond to point from one atom to another
        bond.lookAt(pos)
        bond.rotateX(Math.PI / 2)

        group.add(bond)

        // Occasionally connect to another random atom
        if (Math.random() > 0.7 && i > 1) {
          const otherAtomIndex = 1 + Math.floor(Math.random() * (i - 1))
          const otherPos = atomPositions[otherAtomIndex]

          const bondLength = new THREE.Vector3().subVectors(pos, otherPos).length()
          const bondGeometry = new THREE.CylinderGeometry(bondRadius, bondRadius, bondLength, 8)
          const bond = new THREE.Mesh(bondGeometry, bondMaterial)

          // Calculate the midpoint between atoms
          const midpoint = new THREE.Vector3().addVectors(pos, otherPos).multiplyScalar(0.5)

          // Set position to midpoint
          bond.position.copy(midpoint)

          // Orient the bond to point from one atom to another
          bond.lookAt(otherPos)
          bond.rotateX(Math.PI / 2)

          group.add(bond)
        }
      }
    })

    return group
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
      groupRef.current.rotation.z += delta * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4} position={position}>
      <primitive ref={groupRef} object={moleculeGeometry} scale={scale} rotation={rotation} />
    </Float>
  )
}

export function MoleculeAnimation() {
  return (
    <>
      <MoleculeStructure position={[-8, -8, -12]} rotation={[0.2, 0.5, 0]} scale={0.8} />
      <MoleculeStructure position={[10, 0, -18]} rotation={[-0.3, -0.2, 0.1]} scale={0.6} />
      <MoleculeStructure position={[0, 12, -15]} rotation={[0.1, 0.3, -0.2]} scale={0.7} />
    </>
  )
}

