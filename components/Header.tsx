"use client"
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'


const Hero = () => {

    const handleScroll = () => {

    }

    return (
        <div className="hero">
            {/* this is the hero section */}

            <div className='flex-1 pt-36 padding-x'>

                <h1 className="shop_title">
                    Explore all the exclusive Products
                </h1>

                <p className='shop_subtitle'>
                    Buy exclusive Attire,Gadgets,Households,watches etc.
                </p>

                <CustomButton
                    title="Shop Products"
                    containerStyles="bg-red-500 text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />

                <div >

                    <Image src="/shop.png" alt='/car.png'  width={600} height={400} className="ml-20 object-contain" >

                    </Image>

                </div>

            </div>

        </div>
    )
}

export default Hero
