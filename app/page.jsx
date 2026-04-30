'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollectionsSection from "@/components/CollectionSection";
import LuxuryCollection from "@/components/LuxuryCollection";
import TrendingCollection from "@/components/TrendingCollection";
import UpcomingCollection from "@/components/UpcomingCollection";
//import { AppleCardsCarouselDemo } from "@/components/Corousel";
import SimilarMediaPlayer from "@/components/MediaPlayer";
import ProductCard3D from "@/components/ProductCard3d";
import Bangslider from "@/components/Bangslider";

const Home = () => {
  return (
    <>
    <div 
        
      >
      <Navbar/>
      
        <HeaderSlider />
         <CollectionsSection/>
        <SimilarMediaPlayer />
    
        <UpcomingCollection />
        <LuxuryCollection />
        <TrendingCollection/>
        <Bangslider/>
        {/* <HomeProducts /> */}
        <FeaturedProduct />
        <Banner />
       
      
    
      
      <Footer />
       </div>
      
    </>
  );
};

export default Home;
