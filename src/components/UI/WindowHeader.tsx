import { Plus } from 'lucide-react'

const WindowHeader = () => {
  return (
    <div className='w-full h-16 flex justify-between items-center bg-gradient-to-l from-black-600 via-white-500 to-black-600 py- border-b border-black-700 px-7'>
        <div className='flex space-x-4'>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-700 shadow-lg shadow-red-500/50" />
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 shadow-lg shadow-yellow-500/50" />
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-700 shadow-lg shadow-green-500/50" />
        </div>

        <Plus className='text-white w-5 h-5 '/>
    </div>
  )
}

export default WindowHeader