import React,{Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from '../Loader';


const Ball = (props) => {
     const [decal] = useTexture([props.imgUrl]);

  return (
<Float speed={1.75} rotationIntensity={1}
  floatIntensity={2}>
    {/*---controls the contrast */}
  <ambientLight intensity={0.25} />
  {/*--direction of the light */}
  <directionalLight position={[0,0,0.05]}/>
  
  <mesh castShadow receiveShadow scale={2.75}>
    
    {/*-----for the rotation----- */}
  <icosahedronGeometry args={[1, 1]} />

    {/*------for the material---- */}
    <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/*---for placing the contents inside the balls */}
         <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />

  </mesh>
</Float>
  )
}

const BallCanvas = ({icon})=>{
  return(
    <Canvas
    frameloop="demand"
    gl={{ preserveDrawingBuffer: true }}>

    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
      />
      <Ball imgUrl={icon}/>
    </Suspense>
    <Preload all />
  </Canvas>
  )
}
export default BallCanvas