"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { DNAAnimation } from "./dna-animation"
import { BoneAnimation } from "./bone-structure"
import { MoleculeAnimation } from "./molecule-structure"

export function BackgroundScene() {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <Suspense fallback={null}>
          <DNAAnimation />
          <BoneAnimation />
          <MoleculeAnimation />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

