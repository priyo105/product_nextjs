import React from 'react';
import Link from 'next/link';
import { productProps } from '@/types';
import Image from 'next/image';

interface productCartProps {
    product: productProps;
}

export default function ProductCard({ product }: productCartProps) {
    const { thumbnail, title, description } = product;

    return (
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                <div className="max-w-[300px] max-h-[200px] overflow-hidden conta">
                    <img src={thumbnail} alt="Your Image" className="w-full h-full object-cover" />
                </div>
                <a href="#!">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
            </div>
            <div style={{ flex: 1 }}>
                <div className="p-6" style={{ height: 200 }}>
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                        {title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600">
                        {description}
                    </p>
                </div>
                <div className="p-6 flex justify-center">
                    <Link href={{
                        pathname: '/details',

                        //@ts-ignore
                        query: product
                    }}
                        style={{ color: 'blue', textDecoration: 'underline' }}
                    >

                        <button
                            type="button"
                            className="inline-block rounded bg-black text-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            See  Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
