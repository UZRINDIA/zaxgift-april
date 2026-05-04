"use client"
import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';


const ProductCard = ({ product }) => {
    const { currency, router } = useAppContext();
    const [index, setIndex] = useState(0); // current image index

    const totalImages = product.images.length;

    const next = (e) => {
        e.stopPropagation();
        setIndex((i) => (i + 1) % totalImages);
    };

    const prev = (e) => {
        e.stopPropagation();
        setIndex((i) => (i - 1 + totalImages) % totalImages);
    };


    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer"
        >
            <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center overflow-hidden">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    className="transform transition-transform duration-300 ease-in-out group-hover:scale-110 object-cover w-full h-full"
                    width={800}
                    height={900}
                />
                {totalImages > 1 && (
                    <>

                    </>
                )}

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-black text-white px-2 py-0.5 rounded hover:bg-gray-800">
                        quick-cart
                    </button>
                </div>

                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt="heart_icon"
                    />
                </button>
            </div>


            <p className="md:text-base font-medium pt-2 w-full truncate">{product.name}</p>
            <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{product.description}</p>
            <div className="flex items-center gap-2">
                <p className="text-xs">{4.5}</p>
                <div className="flex items-center gap-0.5 hover:scale-110">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                            key={index}
                            className="h-3 w-3"
                            src={
                                index < Math.floor(4)
                                    ? assets.star_icon
                                    : assets.star_dull_icon
                            }
                            alt="star_icon"
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-end justify-between w-full mt-1">
                <p className="text-base font-medium">{currency}{product.offerPrice}</p>
                <button className=" max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition">
                    Buy now
                </button>
            </div>
        </div>
    )
}

export default ProductCard