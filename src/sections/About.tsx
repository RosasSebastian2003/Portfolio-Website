import { useState } from 'react'
import Globe from 'react-globe.gl'
import { Button } from '../components/Button'
import { RadialIntro } from '@/components/animate-ui/components/community/radial-intro'
import { RoundedSquareBackground } from '@/components/animate-ui/components/backgrounds/hexagon'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText("rmsebastian2003@gmail.com")

        setHasCopied(true)

        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    const orbitItems = [
        { id: 0, name: "Swift",src: "/assets/icons/swift.png" },
        { id: 1, name: "Firebase",src: "/assets/icons/firebase.png" },
        { id: 2, name: "Typescript",src: "/assets/icons/typescript.png" },
        { id: 3, name: "Next.js",src: "/assets/icons/next.png" },
        { id: 4, name: "Nest.js",src: "/assets/icons/nest.png" },
        { id: 5, name: "Tailwind",src: "/assets/icons/tailwind.png" },
        { id: 6, name: "PostgreSQL",src: "/assets/icons/postgress.png" },
        { id: 7, name: "Python",src: "/assets/icons/python.png" },
    ]

  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="assets/memoji.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>I'm Sebastian, nice to meet you!</p>
                        <p className='grid-subtext'>I'm currently pusrruing my 7th semester of the computer science bachelors degree at Instituto Tecnologico y de Estudios Superiores de Monterrey</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <RadialIntro orbitItems={orbitItems}/>
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>I spetialice in SwiftUI</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        <Globe 
                        height={326}
                        width={326}
                        backgroundColor='rgba(0,0,0,0)'
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[{lat:25.67507, lng:-100.31847, text:"Located at Monterrey Nuevo Leon, Mexico", color:"white", size:1000}]}
                        />
                    </div>
                    <div>
                        <p className='grid-headtext'>I work remotely across timezones</p>
                        <p className='grid-subtext'>I'm based in Mexico with remote work available</p>
                        <Button name="Contact me" isBeam containerClass={'w-full mt-10'} />
                    </div>
                </div>
            </div>

            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <RoundedSquareBackground />
                    <div>
                        <p className='grid-headtext'>My passion for coding</p>
                        <p className='grid-subtext'>I like solving problems and building things through code</p>
                    </div>
                </div>
            </div>

            <div className='xl: col-span-1 xl:row-span-2 '>
                <div className='grid-container'>
                    <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[200px] sm:h-[276px] h-fit object-cover sm:object-top' />
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact me</p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                            <p className='lg:text-xl md:text-l font-medium text-gray_gradient text-white'>rmsebastian2003@gmail.com</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About