import Image from 'next/image';
import React from 'react';

import heroImage from '../public/hero.png';
import logoImage from '../public/logo.png';

const navCategories: Array<string> = ['Men', 'Woman', 'Teen', 'Collection', 'Trends'];

const HeroSection = () => {
    return (
        <section className='relative w-full flex flex-col justify-center items-center border-gray-500 border-2'>
            <div className='z-0 absolute inset-0 '>
                <Image alt='two-girls-bgred' src={heroImage} height={905} width={1440} />
            </div>
            <nav className='flex w-full justify-between z-10 mt-12'>
                <div className='flex items-center ml-[30px]'>
                    <Image alt='logo' src={logoImage} width={59} height={35} className='hidden md:block'/>
                    <p className='text-[rgba(0,0,0,0.67)] font-bold md:text-3xl text-sm'>WindFashion</p>
                </div>
                <ul className='text-white hidden md:flex justify-center items-center gap-12'>
                    {navCategories.map((item, key) => (
                        <li className='text-2xl' key={key}>{item}</li>
                    ))}
                </ul>
                <div className='mr-[50px] flex justify-center items-center gap-2'>
                    <button className='border-[1px] border-red-500 rounded-lg text-white pt-3 pr-5 pb-3 pl-7 text-2xl '>Login</button>
                    <button className='border-4 border-red-500 rounded-lg text-white '>Sign up</button>
                </div>
            </nav>
        </section>
    );
};

export default HeroSection;
