import { Canvas, useFrame } from '@react-three/fiber'
import { PresentationControls, AdaptiveDpr, Environment, Clouds, Cloud, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import Level from './components/Level'
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing"
import { useRef } from 'react'

export default function App() {
  return (
    <Canvas performance={{ min: 0.5 }} gl={{ antialias: true }} shadows dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
      <color attach="background" args={['#e0b7ff']} />
      <ambientLight intensity={1}/>
      <Environment files="/environment.hdr" />
      <PresentationControls snap global zoom={0.8} rotation={[Math.PI / 4, 0, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
        <group position-y={0} dispose={null}>
          <directionalLight position={[5, 5, 5]} intensity={1.7} castShadow />;
          <Level />
          <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
            <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
          </AccumulativeShadows>
        </group>
      </PresentationControls>
      <AdaptiveDpr pixelated />
      <EffectComposer multisampling={0}>
        <N8AO halfRes color="black" aoRadius={2} intensity={1} aoSamples={6} denoiseSamples={4} />
        <SMAA />
      </EffectComposer>
    </Canvas>
  )
}
