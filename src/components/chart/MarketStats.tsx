import React from 'react'

const MarketStats: React.FC = () => {
    return (
        <div className="lg:col-span-4 min-h-[200px] sm:min-h-[180px] lg:min-h-0">
            <div className="mt-2 flex flex-col justify-between items-center">
                <div className="bg-gray-200 rounded-xl p-4 space-y-4">
                    {/* Buyers Row */}
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="font-['GilroyLight'] text-black text-base">Buyers</span>
                            <span className="bg-gray-300 rounded-full px-3 py-1 font-['GilroyLight'] text-black">
                                66.93%
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-['RobotoRegular'] text-[#54C764] text-base">Low:</span>
                            <span className="font-['RobotoRegular'] text-[#54C764] text-base font-semibold">
                                3686.38
                            </span>
                        </div>
                    </div>

                    {/* Seller Row */}
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="font-['GilroyLight'] text-black text-base">Seller</span>
                            <span className="bg-gray-300 rounded-full px-3 py-1 font-['GilroyLight'] text-black text-sm">
                                66.93%
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-['GilroyLight'] text-[#ED1D25] text-base">High:</span>
                            <span className="font-['GilroyLight'] text-[#ED1D25] text-base font-semibold">
                                3788.96
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <p className="font-['Urbanist'] text-black text-base">Browse all markets</p>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 11.5L6.25 6.25L1 1"
                            stroke="#ED1D25"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default MarketStats

