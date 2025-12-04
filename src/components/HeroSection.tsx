import React from 'react'
import bannerImage from '../assets/images/banner.png'

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-[700px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-white z-10">
            <h1 
              className="text-5xl lg:text-6xl xl:text-7xl font-gilroy font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Gilroy', system-ui, -apple-system, sans-serif" }}
            >
              Trade Forex <br/> <span className="text-white">with Premier Markets</span>
            </h1>
            <p className="text-lg lg:text-xl mb-10 text-white/95 leading-relaxed max-w-xl urbanist !font-thin">
              Access global markets with advanced trading <br/> <span className="text-white">tools, competitive spreads, and institutional grade execution.</span>
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

          {/* Right side - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[600px] transform rotate-[-8deg] lg:rotate-[-5deg]">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3.5rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative">
                  {/* Phone screen content */}
                  <div className="h-full bg-gray-50">
                    {/* Status bar */}
                    <div className="bg-white px-6 py-3 flex items-center justify-between text-xs font-semibold text-gray-900">
                      <span>9:41</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-2.5 border border-gray-900 rounded-sm">
                          <div className="w-4/5 h-full bg-gray-900 rounded-sm"></div>
                        </div>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>
                    </div>

                    {/* Watchlist content */}
                    <div className="p-5">
                      <h2 className="text-xl font-bold mb-5 text-gray-900">My Watchlist</h2>
                      
                      {/* Watchlist items */}
                      <div className="space-y-3">
                        {/* VUSA */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm font-bold">V</span>
                              </div>
                              <div>
                                <div className="text-sm font-bold text-gray-900">Vanguard S&P 500</div>
                                <div className="text-xs text-gray-500 font-medium">VUSA</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-gray-900">$75.48</div>
                              <div className="text-xs text-green-600 font-semibold">+1.1575</div>
                            </div>
                          </div>
                        </div>

                        {/* IVV */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm font-bold">i</span>
                              </div>
                              <div>
                                <div className="text-sm font-bold text-gray-900">iShares Core S&P 500</div>
                                <div className="text-xs text-gray-500 font-medium">IVV</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-gray-900">$75.48</div>
                              <div className="text-xs text-red-600 font-semibold">-0.10</div>
                            </div>
                          </div>
                        </div>

                        {/* QQQ */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm font-bold">Q</span>
                              </div>
                              <div>
                                <div className="text-sm font-bold text-gray-900">Invesco QQQ Trust</div>
                                <div className="text-xs text-gray-500 font-medium">QQQ</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-gray-900">$75.48</div>
                              <div className="text-xs text-green-600 font-semibold">+0.01</div>
                            </div>
                          </div>
                        </div>

                        {/* 21Shares Bitcoin */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-bold text-gray-900">21Shares Bitcoin Core</div>
                                <div className="text-xs text-gray-500 font-medium">VUSA</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-gray-900">$75.48</div>
                              <div className="text-xs text-red-600 font-semibold">-0.12</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120L60 100C120 80 240 40 360 30C480 20 600 40 720 50C840 60 960 60 1080 50C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection

