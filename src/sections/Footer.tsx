

const Footer = () => {
    return (
        <section className='c-spae pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-white-500 flex gap-2'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className='flex gap-3'>
                <a href="https://github.com/RosasSebastian2003" target="_blank" rel="noopener noreferrer">
                    <div className='social-icon'>
                        <img src="public/assets/icons/github.png" alt="github" className='w-1/2 h-1/2' />
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/rossassebastian" target="_blank" rel="noopener noreferrer">
                    <div className='social-icon'>
                        <img src="/assets/icons/linkedin.png" alt="linkedin" className='w-1/2 h-1/2' />
                    </div>
                </a>

                <p className='text-white-500'>© 2026 Sebastian Rosas. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer