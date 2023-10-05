import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string,
    containerStyles?: string,
    handleClick :
    MouseEventHandler<HTMLButtonElement>;
} 


export interface productProps{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}