import React from 'react'
import bannerImage from '../assets/images/banner.png'
import mobileImage from '../assets/images/mobile.png'

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-[800px] flex items-left overflow-hidden pt-24"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="">
          <div className="text-white z-10">
            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-gilroy font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Gilroy', system-ui, -apple-system, sans-serif" }}
            >
              Trade Forex <br /> <span className="text-white">with Premier <br /> Markets</span>
            </h1>
            <p className="text-lg lg:text-xl mb-10 text-white leading-relaxed max-w-xl urbanist !font-thin">
              Access global markets with advanced trading <br /> <span className="text-white">tools, competitive spreads, and institutional <br/> <span className="text-white">grade execution.</span></span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-premier-red px-8 py-3.5 font-bold text-base hover:bg-gray-50 transition-colors shadow-lg !rounded-full cursor-pointer text-[red]">
                Start Trading
              </button>
              <button className="bg-transparent text-white border-2 border-white px-8 py-3.5 font-bold text-base hover:bg-white/10 transition-colors !rounded-full cursor-pointer">
                Try Demo Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-[-10px] left-0 w-full z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 29.575C0 29.575 611 0 925.5 0C1240 0 1440 35.5632 1440 35.5632V182H0V29.575Z" fill="white" />
        </svg>
      </div>
      {/* Right side - Phone mockup */}
      <div className="hidden md:block absolute bottom-15 right-[15%] flex justify-center lg:justify-center">
        <img
          src={mobileImage}
          alt="Mobile app preview"
          className="w-[80%] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[500px] h-auto object-contain"
        />
      </div>
    </section>
  )
}

export default HeroSection

