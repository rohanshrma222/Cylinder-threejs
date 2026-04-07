'use client';
import React, { useRef, useEffect } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import Project from './Project';
import { Text } from '@react-three/drei';

const Cylinder = () => {
    const meshRef = useRef(); // Reference to the cylinder mesh
    const tex = useTexture('/images/slider-image.png');

    useEffect(() => {
        const handleScroll = (event) => {
            if (meshRef.current) {
                const scrollTop = window.scrollY;
                const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

              
                const scrollProgress = scrollTop / documentHeight;

                meshRef.current.rotation.y = scrollProgress * Math.PI * 4;
            }
        };
       
        window.addEventListener('scroll', handleScroll);
 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <mesh ref={meshRef} renderOrder={0}>
            <cylinderGeometry args={[2, 2, 2, 60, 60, true]} />
            <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
    
    );
};

export default Cylinder;
