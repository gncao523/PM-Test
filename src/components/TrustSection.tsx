import React from 'react'
import bannerImage from '../assets/images/trustbanner.png'

const TrustSection: React.FC = () => {
    return (
        <section className="relative py-16 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left side - Heading */}
                    <div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-['Gilroy'] font-bold mb-6 leading-[97%]">
                            Join <span className="text-[red]">50,000+</span> traders who <br /> <span>trust us</span>
                        </h2>
                    </div>

                    {/* Right side - Description and Buttons */}
                    <div>
                        <p className="text-base sm:text-lg lg:text-xl text-[#232323] mb-8 font-['UrbanistRegular']">
                            Experience advanced trading tools, transparent and competitive pricing, lightning-fast execution, and dedicated support trusted by traders worldwide.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[red] text-white px-8 py-3.5 font-['Urbanist'] text-base hover:bg-[#C91A21] transition-colors shadow-lg rounded-full cursor-pointer">
                                Start Trading
                            </button>
                            <button className="bg-transparent text-[red] border-2 border-[red] px-8 py-3.5 font-['Urbanist'] text-base hover:bg-[red] hover:text-white transition-colors rounded-full cursor-pointer">
                                Try Demo Account
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Red Banner */}
                <div className="relative h-auto sm:h-[373px] flex items-center justify-center sm:justify-end">
                    <img src={bannerImage} alt="banner" className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover z-0" />
                    <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 mt-8 sm:mt-24">
                        <div className="text-white flex flex-col items-start justify-center">
                            <h3 className="text-3xl sm:text-2xl lg:text-3xl xl:text-4xl font-['Gilroy'] font-bold mb-6 leading-tight text-[red] sm:text-white">
                                Everything you need to <br/> trade the markets
                            </h3>
                            <div className="bg-gradient-to-r from-[#6D0002] to-[#FFFFFF] p-[2px] rounded-[55px] flex justify-center items-center">
                                <button className="w-full px-10 py-4 bg-gradient-to-r from-[#390507] to-[#962020] shadow-[0px_4px_34px_rgba(255,255,255,0.25),0px_4px_34px_rgba(255,0,0,0.25),0px_4px_24px_rgba(255,74,74,0.25),inset_0px_3px_10px_rgba(255,255,255,0.25),inset_0px_4px_24px_rgba(152,14,14,0.25),inset_0px_2px_5px_rgba(255,7,7,0.75)] rounded-[55px] text-white font-['Urbanist'] text-base cursor-pointer">
                                    Explore Accounts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustSection

