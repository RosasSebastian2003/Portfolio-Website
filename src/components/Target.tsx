import { useGSAP } from '@gsap/react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useRef } from 'react'
import * as THREE from 'three'

const Target = (props: JSX.IntrinsicElements['mesh']) => {
    const targetRef = useRef<THREE.Mesh>(null)
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

    useGSAP(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: targetRef.current.position.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
            })
        }
    })
  return (
    <mesh { ... props } ref={targetRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Target