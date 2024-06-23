import { Canvas } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { Suspense, useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Pizza = () => {
  const refMesh = React.useRef();
  useFrame(() => {
    refMesh.current.rotation.y += 0.01;
  });
  const gltf = useLoader(GLTFLoader, "./pizza.glb");
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={5}
        rotate={(0, 10, 40)}
        ref={refMesh}
      />
    </>
  );
};

export default function Model() {
  return (
    <>
      <div className="h-svh z-[0]">
        <Suspense fallback={<span>loading...</span>}>
          <Canvas camera={{ manual: true }}>
            <PerspectiveCamera makeDefault manual position={[0, 20, 0]} />
            <OrbitControls
              enableRotate
              enableZoom={false}
              enablePan={false}
              target={[0, 0, 0]}
            />
            <mesh>
              <Pizza />
              <MeshWobbleMaterial />
              <ambientLight intensity={1} />
              <directionalLight color="white" position={[0, 0, 5]} />
            </mesh>
            {/* <EffectComposer>
              <Noise opacity={0.6} />
            </EffectComposer> */}
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}
