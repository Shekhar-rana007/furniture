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
      link: "#"
    },
    {
      image: "https://d3juy0zp6vqec8.cloudfront.net/images/category/living-room-furniture.webp",
      text: " Living Room ",
      link: "#"
    },
    {
      image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
      text: " Dining Room ",
      link: "#"
    },
    {
      image: " https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Study Room ",
      link: "#"
    },
    {
      image: "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: " Office Room ",
      link: "#"
    },
    {
      image: "https://images.pexels.com/photos/4993073/pexels-photo-4993073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: " Appliances ",
      link: "#"
    },
    {
      image: "https://images.pexels.com/photos/7061393/pexels-photo-7061393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: " Combos ",
      link: "#"
    },
    {
      image: "https://images.pexels.com/photos/6492388/pexels-photo-6492388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: " others ",
      link: "#"
    },
  ]
  return (
    <>
      <section className="hero-sectionMain w-full h-125.5 md:h-auto bg-cover bg-no-repeat bg-center pt-7 md:pt-28 pb-3.5">
        <div className="h-full flex flex-col text-center">
          <div className="container my-auto md:my-0">
            <h1 className="relative text-2.5xl leading-10 md:text-5.5xl md:leading-74 lg:leading-72 font-bold text-light rounded max-w-md md:max-w-[906px] mx-auto mt-6 md:mt-0" style={{ textShadow: "0.5px 3px  20px grey" }}>Make your picture perfect home with us</h1>
          </div>
        </div>
      </section>

      <section className="featured-categories pt-8 pb-6 md:pt-12 md:pb-16 w-full">
        <div className="container">
          <h2 className="text-2xl leading-6 font-bold text-ruby-alpha mb-6 text-center md:text-4.5xl md:leading-56 md:mb-8">Rent Furniture & Appliances</h2>
          <div className="md:max-w-full max-w-[342px] mx-auto">
            < div className="md:w-full flex md:justify-center flex-wrap gap-2.5 md:gap-4 mb-6 md:mb-10 md:px-2 lg:px-6 rounded shadow p-5">
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