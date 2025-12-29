import { Plus } from 'lucide-react'

const WindowHeader = () => {
  return (
    <div className='w-full h-10 sm:h-12 md:h-14 lg:h-16 flex justify-between items-center bg-gradient-to-l from-black-600 via-white-500 to-black-600 border-b border-black-700 px-4 sm:px-7'>
        <div className='flex space-x-2 sm:space-x-3 md:space-x-4'>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-700 shadow-lg shadow-red-500/50" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 shadow-lg shadow-yellow-500/50" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-700 shadow-lg shadow-green-500/50" />
        </div>

        <Plus className='text-white w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5'/>
    </div>
  )
}

export default WindowHeader