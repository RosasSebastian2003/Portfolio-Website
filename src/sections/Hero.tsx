import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import MacBookPro from '../components/MacBookPro'
import CanvasLoader from '../components/CanvasLoader'
import Iphone16 from '../components/Iphone16'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import VisionPro from '../components/VisionPro'
import { Button } from '../components/Button'



const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    // const controls  = useControls('MacBookPro', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max:10,
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max:10,
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max:10,
    //     }, 
    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max:10,
    //     },
    //     rotationY: {
    //         value: 0,
    //         min: -10,
    //         max:10,
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max:10,
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 50,
    //     }
    // })

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Sebastian <span className='waving-hand'>👋🏻</span></p>
            <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
        </div>

        <div className='w-full h-full absolute inset-0 '>
            {/* <Leva /> */}
            <Canvas className='w-full h-full pt-10 pb-10'>
                <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera makeDefault position={[0, 0, 25]} />

                    <group>
                        <MacBookPro 
                            scale={sizes.macbookScale} 
                            position={sizes.macbookPosition} 
                            rotation={[0.4, 0.8, -0.2]}/>

                        <Iphone16 
                            scale={sizes.iphoneScale} 
                            position={sizes.iphonePosition} 
                            rotation={[-0.4, -0.4, -0.4]}/>

                        <VisionPro
                            scale={sizes.visionProScale} 
                            position={sizes.visionProPosition} 
                            rotation={[-4.2, 0.0, -3.4]} />

                    </group>
                    

                    <ambientLight intensity={0.6} />
                    <directionalLight position={[10, 10, 3]} intensity={0.8} />
                </Suspense>
            </Canvas>
        </div>

        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
            <a href="#about" className='w-fit'>
                <Button name="Let's work together!" isBeam containerClass='sm:w-fit w-full sm:m-w-96' />
            </a>
        </div>
    </section>
  )
}

export default Hero