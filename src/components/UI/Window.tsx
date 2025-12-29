import WindowHeader from './WindowHeader'
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';

const Window = () => {
  return (
    <div className='h-[800px]  sm:h-[900px] md:h-[1000px] border border-white-500 rounded-2xl overflow-hidden flex flex-col'>
        <WindowHeader />
        <div className='flex-1 bg-black text-white'>
          <GravityStarsBackground
            starsCount={150}
            starsSize={3}
            glowIntensity={20}
            mouseInfluence={150}
          />
        </div>
    </div>
  )
}

export default Window