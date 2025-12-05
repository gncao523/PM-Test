import React from 'react'
import sectionBg from '../assets/images/ctabanner.png'
import register from '../assets/images/register.png'
import fund from '../assets/images/fund.png'
import start from '../assets/images/start.png'

const GetStartedSection: React.FC = () => {
    return (
        <section className="relative max-w-6xl mx-auto my-4 sm:my-8 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-2xl sm:rounded-3xl">
            <img src={sectionBg} alt="get started" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
            <div className="relative z-10 w-full">
                <div className="relative z-10 flex items-center justify-start gap-2 sm:gap-4 flex-wrap">
                    <img src={register} alt="register" className="object-cover h-16 sm:h-20 md:h-24 w-auto" />
                    <img src={fund} alt="fund" className="object-cover h-16 sm:h-20 md:h-24 w-auto" />
                    <img src={start} alt="start" className="object-cover h-16 sm:h-20 md:h-24 w-auto" />
                </div>
                <p className="text-white text-sm sm:text-base font-['UrbanistRegular'] pl-0 sm:pl-4 md:pl-6 mb-4 sm:mb-6 mt-4 sm:mt-0">
                    Ready to trade smarter? Get instant access to global markets with reliable tools and 24/5 support.
                </p>
                <button className="bg-white text-[#FC1B1B] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-['Urbanist'] text-sm sm:text-base font-bold hover:bg-gray-50 transition-colors shadow-lg ml-0 sm:ml-4 md:ml-6 cursor-pointer w-full sm:w-auto">
                    Get Started
                </button>
            </div>
        </section>
    )
}

export default GetStartedSection

