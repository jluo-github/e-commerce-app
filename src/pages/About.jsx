const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We Love
        </h1>

        <div className='stats bg-primary shadow-2xl'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              Comfy
            </div>
          </div>
        </div>
      </div>

      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias officiis
        quos, necessitatibus perferendis fugiat eveniet omnis, libero
        blanditiis, laudantium rem sequi ex incidunt dolorum. Quae quo molestias
        harum enim magnam aspernatur laborum officia iure fuga, placeat
        veritatis vitae nostrum rem delectus odio expedita necessitatibus
        nesciunt soluta porro reiciendis? Adipisci, quae?
      </p>
    </>
  );
};
export default About;
