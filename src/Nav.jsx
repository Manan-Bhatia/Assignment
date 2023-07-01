import React from 'react'

export default function Nav() {
    return (
        <header className='font-inter flex items-start justify-between mx-20 my-8 text-white'>
            <span className='font-extrabold text-4xl'>RecruitEase</span>
            <nav className='text-right uppercase'>
                <ul>
                    <li className='mb-2'>Home</li>
                    <li className='mb-2'>About</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </header>
    )
}
