import React from 'react'
import Slider from "react-slick";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const appliances = [
    {
      image: "https://d3juy0zp6vqec8.cloudfront.net/images/category/bedroom-furniture.webp",
      text: "Bed Room",
      link: "https://cityfurnish.com/delhi/bedroom-furniture-on-rent"
    },
    {
      image: "https://d3juy0zp6vqec8.cloudfront.net/images/category/living-room-furniture.webp",
      text: " Living Room ",
      link: "https://cityfurnish.com/delhi/bedroom-furniture-on-rent"
    },
    {
      image: "https://d3juy0zp6vqec8.cloudfront.net/images/category/living-room-furniture.webp",
      text: " Living Room ",
      link: "https://cityfurnish.com/delhi/bedroom-furniture-on-rent"
    },
    {
      image: "https://d3juy0zp6vqec8.cloudfront.net/images/category/living-room-furniture.webp",
      text: " Living Room ",
      link: "https://cityfurnish.com/delhi/bedroom-furniture-on-rent"
    },
    {
      image: "https://d3juy0zp6vqec8.cloudfront.net/images/category/living-room-furniture.webp",
      text: " Living Room ",
      link: "https://cityfurnish.com/delhi/bedroom-furniture-on-rent"
    },
    {
      image: "https://d3juy0zp6vqec8.cloudfront.net/images/category/living-room-furniture.webp",
      text: " Living Room ",
      link: "https://cityfurnish.com/delhi/bedroom-furniture-on-rent"
    },
    {
      image: "https://d3juy0zp6vqec8.cloudfront.net/images/category/living-room-furniture.webp",
      text: " Living Room ",
      link: "https://cityfurnish.com/delhi/bedroom-furniture-on-rent"
    },
    {
      image: "https://d3juy0zp6vqec8.cloudfront.net/images/category/living-room-furniture.webp",
      text: " Living Room ",
      link: "https://cityfurnish.com/delhi/bedroom-furniture-on-rent"
    },
  ]
  return (
    <>
      <section className="hero-section w-full h-125.5 md:h-auto bg-cover bg-no-repeat bg-center pt-7 md:pt-28 pb-3.5">
        <div className="h-full flex flex-col text-center">
          <div className="container my-auto md:my-0">
            <h1 className="relative text-2.5xl leading-10 md:text-5.5xl md:leading-74 lg:leading-72 font-bold text-white max-w-md md:max-w-[906px] mx-auto mt-6 md:mt-0">Make your picture perfect home with us</h1>
            <div>
              <a href="https://cityfurnish.com/delhi/rent" aria-label="Check our plan" target="_self" rel="noopener" className="bg-white inline-block rounded-full py-2 px-14 md:py-3 md:px-20 mt-6 mb-[5px] md:mt-9 md:mb-0 text-lg leading-6 font-semibold md:text-2xl md:leading-8 md:font-bold text-[#333333] hover:bg-ruby-delta">Explore</a>
            </div>
          </div>
          <div className="flex justify-end mt-auto md:mt-[68px] pr-5 sub-details">
            <div>
              <p className="text-lg leading-6 md:text-4.5xl md:leading-56 font-bold text-white text-center">100K+</p>
              <p className="text-10 leading-4 md:text-lg font-normal leading-26 text-white align-top">Subscribers</p>
            </div>
            <div className="ml-2.5 md:ml-10">
              <p className="text-lg leading-6 md:text-4.5xl md:leading-56 font-bold text-white text-center">Google</p>
              <p className="text-10 leading-4 md:text-lg font-normal leading-26 text-white align-top">4.5</p>
              <span className="w-[55px] h-3.5 md:w-[112px] md:h-[25px] inline-block bg-no-repeat bg-contain align-top mt-px" style={{ backgroundImage: 'url(https://d3juy0zp6vqec8.cloudfront.net/images/rating-4-5.webp)' }}></span>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-categories pt-8 pb-6 md:pt-12 md:pb-16 w-full">
        <div className="container">
          <h2 className="text-2xl leading-6 font-bold text-ruby-alpha mb-6 text-center md:text-4.5xl md:leading-56 md:mb-8">Rent Furniture & Appliances</h2>
          <div className="md:max-w-full max-w-[342px] mx-auto">
            < div className="md:w-full flex md:justify-center flex-wrap gap-2.5 md:gap-4 mb-6 md:mb-10 md:px-2 lg:px-6">
              {appliances.map((val, id) => {
                return (
                  <a href={val.link} key={id} className="border-0.5 border-ruby-gamma rounded-lg overflow-hidden" aria-label="Bed Room" target="_self" rel="noopener">
                    <img loading="lazy" className="md:w-66 md:h-66 w-[100px] h-[100px]" src={val.image} width="265" height="265" alt="Bed Room" />
                    <p className="text-xs leading-4 font-normal text-ruby-alpha md:text-xl md:leading-8 py-1 md:px-2.5 md:py-2 text-center">{val.text}</p>
                  </a>
                )
              })}

            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home