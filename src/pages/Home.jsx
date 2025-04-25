import React from 'react'
import HeroSection from '../components/HeroSection'
import Title from '../components/Title'
import LatestCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'
import Policy from '../components/Policy'
import Subcription from '../components/subcription'

const Home = () => {
  return (
    <div><HeroSection/>
    <Title text1 = { "LATEST"} text2 = {"COLLECTION" } disc={"Discover our brand-new arrivals, handpicked to bring you the most stylish, high-quality, and in-demand products. Whether youre looking for fashion-forward apparel, cutting-edge gadgets, or timeless accessories, our latest collection has something for everyone."}/>
    <LatestCollection/>
    <Title text1={"BEST"} text2={"SELLERS"} disc={"Explore our top-rated and most-loved products, handpicked by our customers! These bestsellers are known for their premium quality, exceptional style, and unbeatable value. Don't miss out on the favorites that everyone is raving about!" }/>
    <BestSellers/>
    <Policy/>
    <Subcription/>

    </div>
    
  )
}

export default Home