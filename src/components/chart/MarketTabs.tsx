import React from 'react'

interface MarketTabsProps {
    tabs: string[]
    activeTab: string
    onTabChange: (tab: string) => void
}

const MarketTabs: React.FC<MarketTabsProps> = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`px-6 py-2 cursor-pointer rounded-full font-['UrbanistRegular'] transition-colors ${
                        activeTab === tab
                            ? 'bg-[#ED1D25] text-white'
                            : 'bg-white text-[#333333] border-2 border-[#ED1D25]'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default MarketTabs

