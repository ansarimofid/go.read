import React from 'react';

import ctaBlob from './img/cta-blob.png';
import dots from './img/dots.png';

const CTA = () => {
  return (
    <section className={`form mt-24 sm:mt-32 mb-24 sm:mb-32 lg:px-6 xl:px-0`}>
      <div
        style={{
        backgroundImage: `url(${ctaBlob})`
      }}
        className="px-6 max-w-7xl sm:px-10 bg-black text-white lg:mx-auto pt-32 pb-20 sm:py-32 lg:rounded-lg lg:shadow-2xl text-center relative bg-left-bottom bg-no-repeat">
        <h2 className="font-black text-4xl md:text-5xl italic">Get Going, Keep Going!</h2>
        <p className="text-xl md:text-2xl mt-4">We believe the most important thing for creators is to never stop creating.</p>
        <div className=" mt-16">
          <a href="https://play.google.com/store/apps/details?id=com.go.social.prod" className="text-white shadow sm:shadow-none mt-4 md:mt-0 flex-grow bg-primary py-4 px-6 rounded cursor-pointer" target="__new">
          <svg className="inline mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path fill="#fff" d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941a1.563 1.563 0 01-1.532-.011l-.192-.13zm9.469-11.56L1 22.115V2.093l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zM1.46.433A1.563 1.563 0 013.295.195L15.948 7.21l-3.846 3.835L1.46.433z"/>
          </svg>
          <span>Get it on Playstore</span>
          </a>
        </div>
        <img className="absolute cta-dots" src={dots} alt="Dots Decos"/>
      </div>
    </section>
  );
};

export default CTA;