import React, { useState } from 'react'
import MarketTabs from './chart/MarketTabs'
import AssetList from './chart/AssetList'
import GoldTradingWidget from './chart/GoldTradingWidget'
import MarketStats from './chart/MarketStats'
import PriceChart from './chart/PriceChart'

const ChartSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Most Traded')
    const [activeTimeframe, setActiveTimeframe] = useState('1h')
    const [selectedAssetIndex, setSelectedAssetIndex] = useState(0)

    const tabs = ['Most Traded', 'Commodities', 'Indices', 'Cryptocurrencies', 'Shares', 'ETFs']

    const mostTradedAssets = [
        { symbol: 'BTC', name: 'Bitcoin', price: '524,0', change: '+3,25%', isBitcoin: true },
        { symbol: 'BTC', name: 'Bitcoin', price: '524,0', change: '+3,25%', isBitcoin: true },
        { symbol: 'BTC', name: 'Bitcoin', price: '524,0', change: '+3,25%', isBitcoin: true },
        { symbol: 'ETH', name: 'Ethereum', price: '524,0', change: '+3,25%', isBitcoin: false },
    ]

    return (
        <section className="py-16 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Title and Description */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl lg:text-5xl font-['Gilroy'] text-black mb-4">
                        Our Markets
                    </h2>
                    <p className="text-lg text-[#A8A6B1] max-w-3xl mx-auto font-['UrbanistRegular']">
                        Stay informed with the data that matters, on 17,000+ markets. Get the latest
                        news, trader sentiment, spreads, price action and much more.
                    </p>
                </div>

                {/* Market Category Tabs */}
                <MarketTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Panel - Most Traded Assets */}
                    <AssetList
                        assets={mostTradedAssets}
                        selectedIndex={selectedAssetIndex}
                        onSelect={setSelectedAssetIndex}
                    />

                    {/* Right Panel - Gold Trading Widget */}
                    <div className="lg:col-span-9 grid">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0">
                            <GoldTradingWidget />
                            <MarketStats />
                        </div>
                        <PriceChart timeframe={activeTimeframe} onTimeframeChange={setActiveTimeframe} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChartSection
