const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-2xl font-bold leading-none tracking-tight sm:text-4xl'>
          We have a passion for
        </h1>

        <div className='stats bg-primary shadow-2xl'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold'>
              Comfort and Style
            </div>
          </div>
        </div>
      </div>

      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        We believe that your home should be a sanctuary that reflects your
        unique style and personality. Our team of passionate designers scours
        the globe to bring you a carefully curated collection of home
        furnishings that epitomize sophistication and elegance. From sumptuous
        sofas and luxurious bedding to striking artwork and elegant lighting
        fixtures, our offerings are designed to inspire and delight. We take
        pride in sourcing exceptional materials and collaborating with skilled
        artisans who share our commitment to craftsmanship and innovation.
      </p>
    </>
  );
};
export default About;
