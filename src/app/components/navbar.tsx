import React from 'react'
import Link from 'next/link'
import Btn from './btn'

export default function Navbar() {
    return (
        <>
            <nav className='h-20 flex items-center justify-between p-10'>
                <div className='text-2xl'>
                    <span className='righteous-font text-gray-800'>Recipes</span>
                    <span className='text-white'>App</span>
                </div>
                <Btn text='Menu' size='w-24'/>
            </nav>
        </>
    )
}
