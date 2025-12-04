import React from 'react'
import marketsBackground from '../assets/images/markets-bg.png'
import dollar from '../assets/images/dollar.png'
import security from '../assets/images/security.png'
import chart from '../assets/images/chart.png'
import coin from '../assets/images/Coin.png'
import indice from '../assets/images/indice.png'
import earch from '../assets/images/earth.png'
import stock from '../assets/images/stock.png'

const MarketsSection: React.FC = () => {
  const features = [
    {
      icon: (
        <img src={dollar} alt="dollar" className="w-5 h-5" />
      ),
      text: '$0 Deposit Fees',
    },
    {
      icon: (
        <img src={chart} alt="chart" className="w-5 h-5" />
      ),
      text: 'Spreads from 0.0 pips',
    },
    {
      icon: (
        <img src={security} alt="security" className="w-5 h-5" />
      ),
      text: 'Secure Funds',
    },
  ]

  const marketCards = [
    {
      icon: (
        <img src={coin} alt="forex" className="w-12 h-12" />
      ),
      title: 'Forex',
      description: "Trade the world's largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs.",
    },
    {
      icon: (
        <img src={stock} alt="stock" className="w-12 h-9 mt-3" />
      ),
      title: 'Stocks',
      description: "From Wall Street to global tech leaders, follow the world's leading companies and react to market moves in real time.",
    },
    {
      icon: (
        <img src={indice} alt="indice" className="w-12 h-12" />
      ),
      title: 'Indices',
      description: 'Trade major global indices with deep liquidity, precise execution, and competitive spreads across key markets.',
    },
    {
      icon: (
        <img src={earch} alt="earch" className="w-12 h-12" />
      ),
      title: 'Commodities',
      description: 'Tap into global demand and supply trends by trading essential resources such as oil, gas, and agricultural products.',
    },
  ]

  return (
    <section
      className="relative py-16 px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${marketsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
     
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-gilroy font-['Gilroy'] text-white mb-4">
            Access <span className="text-[red]">17,000+</span> <br/> markets all in one
          </h2>
          <p className="text-lg lg:text-xl text-white max-w-3xl mx-auto font-['UrbanistRegular'] py-4">
            Trade forex, shares, indices, and commodities with competitive spreads, deep liquidity, and seamless execution.
          </p>
        </div>

        {/* Feature Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="box-border p-[1px] bg-gradient-to-r from-[#AD1D25] to-[#FF9595] rounded-[30px] shadow-[0px_4px_30px_rgba(255,0,0,0.45),inset_0px_4px_20px_rgba(0,0,0,0.25)]"
            >
              <button
                className="w-full flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#900003] to-[#730307] rounded-[30px] text-white hover:opacity-90 transition-opacity cursor-pointer font-['UrbanistRegular']"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-premier-red rounded-full">
                  {feature.icon}
                </span>
                <span className="font-medium font-gilroy">{feature.text}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketCards.map((card, index) => (
            <div
              key={index}
              className="rounded-[40px] p-[2px] bg-gradient-to-r from-[#FFE6E7] to-[#ED1D25] cursor-pointer"
            >
              <div className="h-full rounded-[40px] bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                <div className="text-premier-red mb-4">{card.icon}</div>
                <h3 className="text-xl font-['Gilroy'] text-black mb-3">{card.title}</h3>
                <div className="border-b border-gray-300 mb-3"></div>
                <p className="text-gray-700 text-md leading-relaxed mb-4 font-['UrbanistRegular']">{card.description}</p>
                <div className="flex justify-end">
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-premier-red transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarketsSection

