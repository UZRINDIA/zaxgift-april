"use client"
import { useEffect, useState, useRef } from "react";
import { assets } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";
import React from "react";
import ZoomImage from '@/components/Productpopup';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Product360Viewer from "@/components/Product360";
import ProductCard3D from "@/components/ProductCard3d";
const Product = () => {

    const { id } = useParams();

    const { products, router, addToCart } = useAppContext()

    const [mainImage, setMainImage] = useState(null);
    const [productData, setProductData] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleSwipe = () => {
        const distance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50; // adjust if needed

        if (distance > minSwipeDistance) {
            // swipe left
            handleNextImage();
        } else if (distance < -minSwipeDistance) {
            // swipe right
            handlePrevImage();
        }
    };


    const handlePrevImage = () => {
        const newIndex = (currentImageIndex - 1 + productData.image.length) % productData.image.length;
        setCurrentImageIndex(newIndex);
        setMainImage(productData.image[newIndex]);
    };

    const handleNextImage = () => {
        const newIndex = (currentImageIndex + 1) % productData.image.length;
        setCurrentImageIndex(newIndex);
        setMainImage(productData.image[newIndex]);
    };


    useEffect(() => {
        if (productData) {
            setMainImage(productData.image[0]);
            setCurrentImageIndex(0);
        }
    }, [productData]);


    const fetchProductData = async () => {
        const product = products.find(product => product._id === id);
        setProductData(product);
    }

    useEffect(() => {
        fetchProductData();
    }, [id, products.length])

    return productData ? (<>
        <Navbar />
        <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="px-5 lg:px-16 xl:px-20">
                    <div
                        className="relative rounded-lg overflow-hidden bg-gray-500/10 mb-4"
                        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
                        onTouchMove={(e) => (touchEndX.current = e.touches[0].clientX)}
                        onTouchEnd={handleSwipe}
                    >
                        <ZoomImage
                            src={mainImage || productData.image[0]}
                            alt="alt"
                            className="w-full h-auto object-cover mix-blend-multiply transform transition-transform duration-300 group-hover:scale-105  touch-pan-x select-none"
                            width={1280}
                            height={720}
                        />
                        <button
                            onClick={handlePrevImage}
                            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 px-2 py-1 rounded shadow"
                        >
                            <FiChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNextImage}
                            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 px-2 py-1 rounded shadow"
                        >
                            <FiChevronRight size={24} />
                        </button>

                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {productData.image.map((image, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => {
                                    setMainImage(image);
                                    setCurrentImageIndex(index);
                                }}
                                className={`cursor-pointer rounded-lg overflow-hidden bg-gray-500/10 hover:scale-105 transition-transform duration-300 ${currentImageIndex === index ? "ring-2 ring-orange-500" : ""
                                    }`}
                            >
                                <Image
                                    src={image}
                                    alt="alt"
                                    className="w-full h-auto object-cover mix-blend-multiply"
                                    width={1280}
                                    height={720}
                                />
                            </div>

                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
                        {productData.name}
                    </h1>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">

                            <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <Image
                                className="h-4 w-4"
                                src={assets.star_dull_icon}
                                alt="star_dull_icon"
                            />
                        </div>
                        <p>(4.5)</p>
                    </div>
                    <p className="text-gray-600 mt-3">
                        {productData.description}
                    </p>
                    <p className="text-3xl font-medium mt-6">
                        ₹{productData.offerPrice}
                        <span className="text-base font-normal text-gray-800/60 line-through ml-2">
                            ₹{productData.price}
                        </span>
                    </p>
                    <hr className="bg-gray-600 my-6" />
                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse w-full max-w-72">
                            <tbody>
                                {productData?.brand && (
                                    <tr>
                                        <td className="text-gray-600 font-medium">Brand</td>
                                        <td className="text-gray-800/50">{productData.brand}</td>
                                    </tr>
                                )}
                                {productData?.colorsAvailable?.length > 0 && (
                                    <tr>
                                        <td className="text-gray-600 font-medium">Colors Available</td>
                                        <td className="text-gray-800/50">
                                            {productData.colorsAvailable.join(", ")}
                                        </td>
                                    </tr>
                                )}
                                {productData?.category && (
                                    <tr>
                                        <td className="text-gray-600 font-medium">Category</td>
                                        <td className="text-gray-800/50">{productData.category}</td>
                                    </tr>
                                )}
                                {productData?.material && (
                                    <tr>
                                        <td className="text-gray-600 font-medium">Material</td>
                                        <td className="text-gray-800/50">{productData.material}</td>
                                    </tr>
                                )}
                                {productData?.dimensions && (
                                    <tr>
                                        <td className="text-gray-600 font-medium">Dimensions</td>
                                        <td className="text-gray-800/50">{productData.dimensions}</td>
                                    </tr>
                                )}
                                {productData?.laptopCompatibility && (
                                    <tr>
                                        <td className="text-gray-600 font-medium">Laptop Compatibility</td>
                                        <td className="text-gray-800/50">{productData.laptopCompatibility}</td>
                                    </tr>
                                )}
                                {productData?.weight && (
                                    <tr>
                                        <td className="text-gray-600 font-medium">Weight</td>
                                        <td className="text-gray-800/50">{productData.weight}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col gap-4 mt-10 w-full">
                        {/* WhatsApp Button */}
                        <a
                            href={`https://wa.me/918595626451?text=${(`I am interested in this product: ${productData?.name}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3.5 bg-green-500 text-white text-center hover:bg-green-600 transition rounded"
                        >
                            Enquire on WhatsApp
                        </a>

                        {/* Quote Form */}
                        {/* <form className="flex flex-col gap-3 p-4 border border-gray-200 rounded">
    <input
      type="text"
      placeholder="Your Name"
      className="border p-2 rounded"
      required
    />
    <input
      type="email"
      placeholder="Your Email"
      className="border p-2 rounded"
      required
    />
    <textarea
      placeholder="Your Message"
      rows="3"
      className="border p-2 rounded"
      required
    />
    <button
      type="submit"
      className="py-3.5 bg-blue-600 text-white hover:bg-blue-700 transition rounded"
    >
      Get Quote
    </button>
  </form> */}
                    </div>

                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-4 mt-16">
                    <p className="text-3xl font-medium">Featured <span className="font-medium text-orange-600">Products</span></p>
                    <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
                    {products.slice(0, 5).map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
                <button className="px-8 py-2 mb-16 border rounded text-gray-500/70 hover:bg-slate-50/90 transition">
                    See more
                </button>
            </div>
        </div>
        <Footer />
    </>
    ) : <Loading />
};

export default Product;

