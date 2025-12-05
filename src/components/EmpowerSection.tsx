import React from 'react'
import empowerImage from '../assets/images/empower.png'
import empowerCard1 from '../assets/images/empower1.png'
import empowerCard2 from '../assets/images/empower2.png'
import empowerCard3 from '../assets/images/empower3.png'
import empowerCard4 from '../assets/images/empower4.png'

const EmpowerSection: React.FC = () => {
    return (
        <section className="relative py-20 px-8 bg-[#0a0a0a] overflow-hidden">
            <img src={empowerImage} alt="empower" className="absolute top-0 left-0 w-full h-full object-cover z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Title and Subtitle */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-['Gilroy'] text-white mb-4">
                        Empower Your Trading
                    </h2>
                    <p className="text-lg lg:text-xl text-[#A8A6B1] max-w-3xl mx-auto font-['UrbanistRegular']">
                        Unlock advanced tools, insights, and support to <br /> maximise your trading potential.
                    </p>
                </div>
                <div className="w-full sm:w-[90%] mx-auto flex items-center justify-between mb-48">
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <img src={empowerCard1} alt="empower" className="w-12 h-12 object-cover" />
                        <h3 className="text-white text-2xl font-['Gilroy']">
                            Charting tools and indicators
                        </h3>
                        <p className="text-[#A8A6B1] text-lg font-['UrbanistRegular'] text-center">
                            Sharpen your analysis with an array<br /> of intuitive charts, drawing tools and <br /> 100+ indicators.
                        </p>
                    </div>
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <img src={empowerCard4} alt="empower" className="w-12 h-12 object-cover" />
                        <h3 className="text-white text-2xl font-['Gilroy']">
                            Get flexible leverage
                        </h3>
                        <p className="text-[#A8A6B1] text-lg font-['UrbanistRegular'] text-center">
                            Trade larger positions and maximise <br/> your return potential with <br /> lower margin requirements.
                        </p>
                    </div>
                </div>
                <div className="w-full sm:w-[90%] mx-auto flex items-center justify-between mt-20">
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <img src={empowerCard2} alt="empower" className="w-12 h-12 object-cover" />
                        <h3 className="text-white text-2xl font-['Gilroy']">
                             Round-the-clock support
                        </h3>
                        <p className="text-[#A8A6B1] text-lg font-['UrbanistRegular'] text-center">
                            Our dedicated experts are available <br/> 24/7 to guide and assist you at every <br/> step.
                        </p>
                    </div>
                    <div className="w-1/3 flex flex-col items-center justify-center">
                        <img src={empowerCard3} alt="empower" className="w-12 h-12 object-cover" />
                        <h3 className="text-white text-2xl font-['Gilroy']">
                            Customisable price alerts
                        </h3>
                        <p className="text-[#A8A6B1] text-lg font-['UrbanistRegular'] text-center">
                            Set real-time alerts to track asset <br/> movements and stay ahead with your <br/> strategy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmpowerSection

