import React from 'react'
import goldBg from '../../assets/images/gold-bg.png'
import downRightArrow from '../../assets/images/downarrow.png'
import upRightArrow from '../../assets/images/upright.png'
import buyBg from '../../assets/images/buybtn.png'
import sellBg from '../../assets/images/sellbtn.png'
import rightArrow from '../../assets/images/rightarrow.svg'

const GoldTradingWidget: React.FC = () => {
    return (
        <div className="relative lg:col-span-8 h-64 sm:h-56 lg:h-48 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <img
                src={goldBg}
                alt="gold"
                className="hidden lg:block absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            <span className="absolute top-7 sm:top-4 left-4 sm:left-4 sm:top-8 sm:left-8 lg:top-12 lg:left-12 font-['Gilroy'] font-bold text-xl sm:text-2xl text-[red] sm:text-white z-10">
                Gold
            </span>
            <img
                src={rightArrow}
                alt="arrow-up"
                className="block lg:hidden absolute top-10 left-17 w-4 h-2 object-cover z-0"
            />
            <div
                className="w-full sm:w-auto font-['UrbanistRegular'] text-white px-4 py-2 sm:px-6 sm:py-2.5 lg:px-7 lg:py-3 rounded-xl sm:rounded-2xl mt-8 sm:mt-0 z-10"
                style={{
                    backgroundImage: `url(${buyBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                Buy <br />{' '}
                <span className="flex items-center gap-1 sm:gap-2 font-['Gilroy'] font-bold text-lg sm:text-xl lg:text-2xl text-white">
                    3773.31{' '}
                    <img src={downRightArrow} alt="arrow-up" className="w-3 h-3 sm:w-4 sm:h-4" />
                </span>
            </div>
            <div
                className="w-full sm:w-auto font-['UrbanistRegular'] text-[red] px-4 py-2 sm:px-6 sm:py-2.5 lg:px-7 lg:py-3 rounded-xl sm:rounded-2xl z-10 border-2 border-[red] sm:border-none"
                style={{
                    backgroundImage: `url(${sellBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                Sell <br />{' '}
                <span className="flex items-center gap-1 sm:gap-2 font-['Gilroy'] font-bold text-lg sm:text-xl lg:text-2xl text-[red]">
                    3773.61{' '}
                    <img src={upRightArrow} alt="arrow-up" className="w-3 h-3 sm:w-4 sm:h-4" />
                </span>
            </div>
            <svg
                className="absolute top-8 right-4 sm:top-3 sm:right-3 sm:top-6 sm:right-6 lg:top-8 lg:right-10 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 z-10"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.92188 9.5625C2.92188 9.2691 3.15972 9.03125 3.45312 9.03125H7.4375C7.7309 9.03125 7.96875 9.2691 7.96875 9.5625V13.5469C7.96875 13.8403 7.7309 14.0781 7.4375 14.0781C7.1441 14.0781 6.90625 13.8403 6.90625 13.5469V10.0938H3.45312C3.15972 10.0938 2.92188 9.8559 2.92188 9.5625Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.81315 9.18685C8.02062 9.39432 8.02062 9.73068 7.81315 9.93815L3.0319 14.7194C2.82443 14.9269 2.48807 14.9269 2.2806 14.7194C2.07313 14.5119 2.07313 14.1756 2.2806 13.9681L7.06185 9.18685C7.26932 8.97938 7.60568 8.97938 7.81315 9.18685Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.02995 2.4362C4.22921 2.23694 4.49946 2.125 4.78125 2.125H13.8125C14.0943 2.125 14.3645 2.23694 14.5638 2.4362C14.7631 2.63546 14.875 2.90571 14.875 3.1875V12.2188C14.875 12.5005 14.7631 12.7708 14.5638 12.9701C14.3645 13.1693 14.0943 13.2812 13.8125 13.2812H10.625C10.3316 13.2812 10.0938 13.0434 10.0938 12.75C10.0938 12.4566 10.3316 12.2188 10.625 12.2188H13.8125V3.1875L4.78125 3.1875L4.78125 6.375C4.78125 6.6684 4.5434 6.90625 4.25 6.90625C3.9566 6.90625 3.71875 6.6684 3.71875 6.375V3.1875C3.71875 2.90571 3.83069 2.63546 4.02995 2.4362Z"
                    fill="white"
                />
            </svg>
        </div>
    )
}

export default GoldTradingWidget

