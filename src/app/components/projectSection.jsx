'use client'
import React, { Suspense } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import '../style.css'
import * as THREE from "three";
import Cylinder from './Cylinder'
import { Bloom, BrightnessContrast, DotScreen, EffectComposer, Noise } from '@react-three/postprocessing'
import { BlendFunction } from "postprocessing";
import Project from './Project'


const ProjectSection = () => {
  return (
    <Canvas camera={{fov:45 }}>
      <OrbitControls enableZoom={false} />
      <ambientLight />
      <Suspense fallback={null}>
        <Cylinder />   
      </Suspense>
        <EffectComposer>
          <Noise premultiply blendFunction={BlendFunction.ADD} />
        </EffectComposer>
    </Canvas>
    
  )
}

export default ProjectSection
