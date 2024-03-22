import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

const carouselImages = [hero3, hero2, hero1, hero4];

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='my-8 max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
          Revolutionizing the Shopping Experience
        </h1>

        <p className='my-12 max-w-2xl'>
          At our company, we&apos;re revolutionizing the way people shop,
          offering a seamless and personalized journey that redefines retail.
        </p>
      </div>

      <p className='mt-8 max-w-xl text-lg leading-8'>
        Welcome to our store where we curate exquisite home furnishings that
        elevate your living spaces. Discover timeless pieces that seamlessly
        blend style, comfort, and quality, crafted with meticulous attention to
        detail. Experience the epitome of luxury firsthand at our showroom. Our
        knowledgeable design consultants are dedicated to helping you create the
        home of your dreams. Schedule an appointment today and let us curate a
        personalized selection that perfectly aligns with your vision.
      </p>

      <div className='mt-10'>
        <Link to='products' className='btn btn-primary'>
          Our Products
        </Link>
      </div>

      {/* carousel imgs */}
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-gray-100 rounded-box'>
        {carouselImages.map((image) => {
          return (
            <div className='carousel-item' key={image}>
              <img
                src={image}
                alt='image'
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
