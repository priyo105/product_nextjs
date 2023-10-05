"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'


export default async function NavBar() {   
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4">
                <div className="flex flex-row">
                    <Link href="/"  >
                        <Image src="/shopping-bag.png" alt='' width={100} height={30} className='object-contain'></Image>
                    </Link>
                    <p className="py-5 font-bold  text-2xl">Exclusive Products</p>
                </div>

                 <CustomButton 
                   title='Sign In'
                   handleClick={()=>{alert('asdas')}}
                 />

            </nav>

        </header>
    )
}
