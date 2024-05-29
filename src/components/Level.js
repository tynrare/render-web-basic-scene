import { useThree } from '@react-three/fiber'
import { useGLTF, MeshDistortMaterial } from '@react-three/drei'
import { useSpring } from '@react-spring/three'

export default function Level() {
  const { nodes, materials } = useGLTF('/level.glb')
  console.log(nodes);
  const { camera } = useThree()
  useSpring(
    () => ({
      from: { y: camera.position.y + 5 },
      to: { y: camera.position.y },
      config: { friction: 100 },
      onChange: ({ value }) => ((camera.position.y = value.y), camera.lookAt(0, 0, 0)),
    }),
    [],
  )
  return <>
  <mesh receiveShadow geometry={nodes.Plane.geometry} scale={[0.2, 0.2, 0.2]} position={[0, 0, 0]} rotation={[0, -Math.PI / 9, 0]}>
    <meshStandardMaterial metalness={0.1} roughness={1} specular={0} map={materials.Material_Main.map} />
  </mesh>
  <mesh castShadow geometry={nodes.Particles.geometry} scale={[0.2, 0.2, 0.2]} position={[0, 0, 0]} rotation={[0, -Math.PI / 9, 0]}>
    <MeshDistortMaterial distort={0.07} speed={5} metalness={0.1} roughness={1} specular={0} map={materials.Material_Main.map} />
  </mesh>
  </>
}
