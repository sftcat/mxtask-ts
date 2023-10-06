
import React, { FC } from 'react';
import { IFooterNav } from '../../utils/model/types';

const footerNavs: IFooterNav[] = [
    {
        href: '/',
        name: 'Домой',
    },
    {
        href: '/banner',
        name: 'Баннер',
    },
];

const Footer: FC = () => {
    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src="https://www.floatui.com/logo.svg" alt="Логотип" className="w-32 sm:mx-auto" />
                <p className="leading-relaxed mt-2 text-[15px]">
                    Мы самый надежный и проверенный интернет-магазин, вы можете доверится нам и покупать только у нас.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0 font-mono">
                {footerNavs.map((item, idx) => (
                    <li className=" hover:text-gray-800" key={idx}>
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>

            <div className="mt-8 flex items-center justify-center sm:flex">
                <div className="mt-4 sm:mt-0">
                    <hr className='bg-black border-[1px] border-blue-500 mb-2' />
                    &copy; 2022 Float UI All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
