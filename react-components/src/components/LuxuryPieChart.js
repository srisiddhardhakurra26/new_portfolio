import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

const PieSlice = ({ startAngle, endAngle, color, label }) => {
  const meshRef = useRef();
  const shape = new THREE.Shape();
  const anglePerRad = Math.PI / 180;
  const centerAngle = (startAngle + endAngle) / 2;

  shape.moveTo(0, 0);
  shape.arc(0, 0, 1, startAngle * anglePerRad, endAngle * anglePerRad, false);
  shape.lineTo(0, 0);

  const extrudeSettings = {
    steps: 1,
    depth: 0.01,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.03,
    bevelOffset: 0,
    bevelSegments: 20
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0025;
    }
  });

  const labelPosition = new THREE.Vector3(
    Math.cos(centerAngle * anglePerRad) * 0.7,
    Math.sin(centerAngle * anglePerRad) * 0.7,
    0.05
  );

  return (
    <group>
      <mesh ref={meshRef} position={[Math.cos(centerAngle * anglePerRad) * 0.05, Math.sin(centerAngle * anglePerRad) * 0.05, 0]}>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshPhongMaterial color={color} specular={0x444444} shininess={30} />
      </mesh>
      <Html position={labelPosition}>
        <div style={{
          color: 'white',
          padding: '5px',
          background: 'rgba(0,0,0,0.8)',
          borderRadius: '5px',
          whiteSpace: 'nowrap',
          transform: 'translate(-50%, -50%)',
        }}>
          {label}
        </div>
      </Html>
    </group>
  );
};

const LuxuryPieChart = ({ data }) => {
  let startAngle = 0;

  return (
    <Canvas 
      camera={{ position: [0, 0, 3], fov: 45 }} 
      style={{ width: '100%', height: '500px', background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <group rotation={[0, 0, 0]}>
        {data.map((item, index) => {
          const endAngle = startAngle + item.value * 360;
          const slice = (
            <PieSlice
              key={index}
              startAngle={startAngle}
              endAngle={endAngle}
              color={item.color}
              label={`${item.value * 100}% ${item.name} `}
            />
          );
          startAngle = endAngle;
          return slice;
        })}
      </group>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default LuxuryPieChart;