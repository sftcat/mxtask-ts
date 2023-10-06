import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Banner: FC = () => {
    return (
        <>
            <Header />
            <div className="mt-5 flex justify-center items-center">
                <div>
                    <Link to="/" className='py-1 px-2 rounded-lg border-black border-2 font-mono'>Назад</Link>
                    
                    <div className='mt-8 rounded-[50px] border-blue-300 border-2'>
                        <iframe width="1000" height="600" className='rounded-[20px]' src="https://www.youtube.com/embed/gkFUbx2ASEg?si=K4L9CwNV53OO-JSA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Banner