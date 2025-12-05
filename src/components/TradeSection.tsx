import React from 'react'
import sectionBg from '../assets/images/tradesectionbg.png'
import tradeImage from '../assets/images/cover.png'
import wVideo from '../assets/images/w-video.png'
import mIndex from '../assets/images/content-card-item-4.png'
import play from '../assets/images/play.png'

const TradeSection: React.FC = () => {
    return (
        <section className="py-20 px-8 bg-white" style={{ backgroundImage: `url(${sectionBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-4">
                    <div className="flex-1">
                        <p className="text-sm lg:text-base text-[red] mb-2 font-['Urbanist']">
                            Daily Updates
                        </p>
                        <h2 className="text-3xl font-['Gilroy'] text-black leading-tight">
                            Everything you need to trade the markets.
                        </h2>
                    </div>
                    <a href="#" className="text-[#FC1B1B] font-['Urbanist'] text-base hover:underline whitespace-nowrap mt-2 lg:mt-0">
                        View all &gt;
                    </a>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
                    {/* Left Card - News Article */}
                    <div className="rounded-3xl shadow-lg overflow-hidden lg:col-span-3">
                        <div className="relative w-full ">
                            {/* Placeholder for news image - DFM building */}
                            <div className="w-full h-full flex items-center justify-center">
                                <img src={tradeImage} alt="trade" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-xs mb-2 font-['Urbanist'] text-[#BDBDBD]">
                                03 October 2025
                            </p>
                            <h3 className="text-sm font-['Gilroy'] text-[#252B42] mb-2">
                                Gulf markets end mixed on Ukraine ceasefire hopes, tariff fears
                            </h3>
                            <p className="text-sm text-[#737373] mb-2 font-['UrbanistRegular']">
                                Stock markets in the Gulf ended mixed on Wednesday, buoyed by Ukraine's readiness to support a proposal for...
                            </p>
                            <a href="#" className="text-[#ED1D25] font-['Urbanist'] text-xs hover:underline">
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Right Card - Promotional Video */}
                    <div className="rounded-3xl overflow-hidden relative lg:col-span-9 flex items-center justify-center" style={{ backgroundImage: `url(${wVideo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <img src={play} alt="play" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>

                {/* Bottom Card - Market Index */}
                <div className="relative rounded-3xl overflow-hidden h-60">
                    <div className="relative">
                        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <img src={mIndex} alt="market index" className="absolute top-0 left-0 z-0 w-full h-60 object-cover rounded-3xl" />
                            {/* Left Content */}
                            <div className="relative top-16 left-28 z-10">
                                <h3 className="text-2xl font-['Urbanist'] text-white mb-4 z-10">
                                    Premier Market - Market Cap Weighted PR (BKP)
                                </h3>
                                <p className="text-sm text-white mb-4 font-['UrbanistRegular']">
                                    Stay ahead of the latest tech trends with our algorithmically selected <br/> portfolio of the 15 top tech stocks each month.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a href="#" className="text-white hover:text-gray-300 font-['Urbanist'] text-sm">
                                        Google
                                    </a>
                                    <a href="#" className="text-white hover:text-gray-300 font-['Urbanist'] text-sm">
                                        Trending
                                    </a>
                                    <a href="#" className="text-white hover:text-gray-300 font-['Urbanist'] text-sm">
                                        investing.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TradeSection

