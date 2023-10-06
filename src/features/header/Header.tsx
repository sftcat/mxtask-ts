import React, { FC } from 'react'
import { Link } from "react-router-dom";


const Header: FC = () => {
    return (
        <div className="flex items-center gap-7 justify-center mb-6 mt-2 font-extralight font-mono underline-offset-1 underline">
            <div>
                <img src="https://www.floatui.com/logo.svg" alt="Логотип" className="mb-5 w-32 sm:mx-auto" />
                <div className='flex items-center justify-center gap-7 mb-5'>
                    <Link to='/'>Домой</Link>
                    <Link to='/banner'>Баннер</Link>
                </div>
                <hr className='w-[300px] border-gray-300' />
            </div>
        </div>
    )
}

export default Header