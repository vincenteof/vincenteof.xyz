import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-60 md:pb-20">
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className="mb-4 text-3xl sm:text-5xl xl:text-6xl 2xl:text-8xl lg:leading-normal font-extrabold flex flex-col">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-pink-500 to-violet-500 leading-none">
              Hello, I'm
            </span>
            <span className="leading-none">Vincenteof</span>
          </h1>
          <p className="text-base sm:text-lg mb-6 lg:text-lg lg:space-x-3text-xl mt-4">
            I'm a frontend developer passionate about building beautiful and
            functional web applications.As an experienced fullstack developer, I
            excel in the creation and refinement of web applications. Throughout
            my career, I've honed my expertise in various cutting-edge
            technologies such as React, JavaScript, Bootstrap, SASS, TypeScript,
            Express, NodeJs, SQL and non SQL data bases, Git & GitHub, Tailwind,
            Next.js, CSS, HTML, and Redux Toolkit. My proficiency is not merely
            a result of my experience but also a demonstration of my dedication
            to remaining at the vanguard of web development.
          </p>
        </div>
        <div className="col-span-4 place-self-center">
          <div className="rounded-full bg-gradient-to-br from-pink-500 to-violet-500 p-1.5">
            <Image
              src="/images/vincenteof.jpg"
              alt="Vincenteof's photo"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
