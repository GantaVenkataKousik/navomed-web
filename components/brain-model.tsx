"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function BrainModel(props) {
  const group = useRef()

  // Create a more elegant abstract brain representation
  const brainGeometry = new THREE.Group()

  // Main brain mass
  const mainSphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 32, 32),
    new THREE.MeshStandardMaterial({
      color: "#e0f2f1",
      roughness: 0.3,
      metalness: 0.2,
      transparent: true,
      opacity: 0.7,
    }),
  )
  brainGeometry.add(mainSphere)

  // Create neural connections (lines)
  const createNeuralConnections = () => {
    const material = new THREE.LineBasicMaterial({
      color: "#4db6ac",
      transparent: true,
      opacity: 0.6,
    })

    for (let i = 0; i < 20; i++) {
      const points = []
      const startPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
      )
      points.push(startPoint)

      const midPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 1.5,
        (Math.random() - 0.5) * 1.5,
        (Math.random() - 0.5) * 1.5,
      )
      points.push(midPoint)

      const endPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
      )
      points.push(endPoint)

      const curve = new THREE.QuadraticBezierCurve3(startPoint, midPoint, endPoint)

      const curvePoints = curve.getPoints(20)
      const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints)
      const line = new THREE.Line(geometry, material)
      brainGeometry.add(line)
    }
  }

  // Create neural nodes (small spheres)
  const createNeuralNodes = () => {
    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: "#26a69a",
      emissive: "#26a69a",
      emissiveIntensity: 0.5,
    })

    for (let i = 0; i < 30; i++) {
      const nodeSize = Math.random() * 0.1 + 0.05
      const nodeSphere = new THREE.Mesh(new THREE.SphereGeometry(nodeSize, 16, 16), nodeMaterial)

      nodeSphere.position.set((Math.random() - 0.5) * 2.2, (Math.random() - 0.5) * 2.2, (Math.random() - 0.5) * 2.2)

      brainGeometry.add(nodeSphere)
    }
  }

  createNeuralConnections()
  createNeuralNodes()

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.05)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.05)
    }
  })

  return (
    <group ref={group} {...props}>
      <primitive object={brainGeometry} />
    </group>
  )
}

