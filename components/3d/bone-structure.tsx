"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

export function BoneStructure({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef()

  // Create the bone structure
  const boneGeometry = useMemo(() => {
    const group = new THREE.Group()

    // Parameters for the bone
    const length = 8
    const radius = 1
    const jointRadius = 1.5

    // Create the main shaft of the bone
    const shaftGeometry = new THREE.CylinderGeometry(radius, radius, length, 16)
    const shaftMaterial = new THREE.MeshStandardMaterial({
      color: "#e0f2f1",
      roughness: 0.3,
      metalness: 0.2,
    })

    const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial)
    group.add(shaft)

    // Create the joints at each end
    const jointGeometry = new THREE.SphereGeometry(jointRadius, 16, 16)
    const jointMaterial = new THREE.MeshStandardMaterial({
      color: "#b2dfdb",
      roughness: 0.4,
      metalness: 0.3,
    })

    const topJoint = new THREE.Mesh(jointGeometry, jointMaterial)
    topJoint.position.y = length / 2
    group.add(topJoint)

    const bottomJoint = new THREE.Mesh(jointGeometry, jointMaterial)
    bottomJoint.position.y = -length / 2
    group.add(bottomJoint)

    // Add some texture/details to the bone
    const detailGeometry = new THREE.TorusGeometry(radius * 1.2, 0.2, 16, 32)
    const detailMaterial = new THREE.MeshStandardMaterial({
      color: "#4db6ac",
      roughness: 0.5,
      metalness: 0.1,
    })

    const topDetail = new THREE.Mesh(detailGeometry, detailMaterial)
    topDetail.rotation.x = Math.PI / 2
    topDetail.position.y = length / 2 - 1
    group.add(topDetail)

    const bottomDetail = new THREE.Mesh(detailGeometry, detailMaterial)
    bottomDetail.rotation.x = Math.PI / 2
    bottomDetail.position.y = -length / 2 + 1
    group.add(bottomDetail)

    return group
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1
      groupRef.current.rotation.x += delta * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3} position={position}>
      <primitive ref={groupRef} object={boneGeometry} scale={scale} rotation={rotation} />
    </Float>
  )
}

export function BoneAnimation() {
  return (
    <>
      <BoneStructure position={[12, -5, -10]} rotation={[1.2, 0.3, 0.5]} scale={0.7} />
      <BoneStructure position={[-15, 8, -15]} rotation={[0.5, -0.8, 0.2]} scale={0.5} />
      <BoneStructure position={[5, 10, -20]} rotation={[-0.3, 0.2, -0.4]} scale={0.6} />
    </>
  )
}

