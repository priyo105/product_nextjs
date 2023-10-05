"use client"
import React from 'react';
import "yet-another-react-lightbox/styles.css";
import ImageSlider from "./ImageSlider";

//@ts-ignore
import ReactStars from "react-rating-stars-component";


export default function Details(params:any) {
    const product = params.searchParams;
    try{
        var slides = product.images.map((item: any) => ({ "url": item }))  ;

    }catch(e){
        console.log(e)
    }
    const containerStyles = {
        width: "80%",
        height: "400px",
        marginTop: 100

    };
    return (
        <main className="overflow-hidden">

            <div className="hero">
                {/* this is the hero section */}

                <div className='flex-1 pt-36 padding-x'>

                    <h1 className="shop_title">
                        {params.searchParams.title}
                    </h1>

                    <p className='shop_subtitle'>
                        Buy exclusive Attire, Gadgets, Households, watches, etc.
                    </p>

                    <div className="mt-4 md:mt-0"> {/* Margin-top on mobile, no margin on desktop */}
                                <p className=' font-extrabold'>
                                    Category
                                </p>
                                <p className='text-red-950'> {product.category}</p>
                            </div>

                    <div className="flex flex-col md:flex-row"> {/* Use flex-col for mobile and flex-row for desktop */}
                        <div className="w-full md:w-1/2"> {/* Full width on mobile, half width on desktop */}
                            <div style={containerStyles} className="mx-auto md:ml-0 md:mr-4"> {/* Centered on mobile, left margin on desktop */}
                                <ImageSlider slides={slides} />
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0"> {/* Margin-top on mobile, no margin on desktop */}
                        <div className="mt-4 md:mt-0"> {/* Margin-top on mobile, no margin on desktop */}
                                <p className='shop_subtitle '>
                                    Brand
                                </p>
                                {product.brand}
                            </div>
                            <p className='shop_subtitle'>
                                Rating
                            </p>
                            <ReactStars
                                count={5}
                                size={60}
                                edit={false}
                                value={product.rating}
                                activeColor="#ffd700"
                            />


                            <div className="mt-4 md:mt-0"> {/* Margin-top on mobile, no margin on desktop */}
                                <p className='shop_subtitle'>
                                    Details
                                </p>
                                {product.description}
                            </div>


                            <div className="mt-4 md:mt-0"> {/* Margin-top on mobile, no margin on desktop */}
                                <p className='shop_subtitle'>
                                    Price
                                </p>
                               £ {product.price}
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </main>
    )
}