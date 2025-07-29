const Hero = () => {
  return (
    <section className='relative h-screen flex items-center justify-center text-white overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-black z-10 opacity-60'></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        poster='https://placehold.co/1920x1080/000000/FFFFFF?text=Loading+Video...'
      >
        <source
          src='https://cdn.pixabay.com/video/2024/05/29/211395-946433290_large.mp4'
          type='video/mp4'
        />
      </video>
      <div className='relative z-20 text-center px-6'>
        <h1
          className='text-4xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4'
          style={{ textShadow: "0 4px 15px rgba(0,0,0,0.5)" }}
        >
          Don't Guess Their Limits.
          <br />
          <span className='text-cyan-400'>Know Them.</span>
        </h1>
        <p className='max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-8'>
          The AI-powered smart wearable that proactively monitors athlete safety
          in real time, preventing cardiac emergencies on the field.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          {/* ... Buttons ... */}
        </div>
      </div>
      {/* ... Trusted by Logos ... */}
    </section>
  );
};

export default Hero;