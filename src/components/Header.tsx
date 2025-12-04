import React, { useState } from 'react'
import flagIcon from '../assets/images/ukflag.png'
import userIcon from '../assets/images/user.png'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white w-full">
      {/* Top bar - responsive */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-1 flex items-center justify-between flex-wrap gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <a href="#" className="text-[10px] sm:text-xs md:text-sm font-bold underline underline-offset-10 sm:underline-offset-18 decoration-[2px] !text-[red] decoration-premier-red whitespace-nowrap">Personal</a>
            <div className="w-px h-3 bg-gray-300"></div>
            <a href="#" className="text-[10px] sm:text-xs md:text-sm lg:text-md font-bold whitespace-nowrap">Institutional</a>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-5 flex-wrap">
            <a href="#" className="text-[10px] sm:text-xs md:text-sm lg:text-md hover:text-gray-900 font-bold whitespace-nowrap">WebTrader</a>
            <a href="#" className="text-[10px] sm:text-xs md:text-sm lg:text-md hover:text-gray-900 font-bold whitespace-nowrap">Support</a>
            <a href="#" className="text-[10px] sm:text-xs md:text-sm lg:text-md hover:text-gray-900 font-bold whitespace-nowrap">Open Demo</a>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 relative overflow-hidden rounded-sm">
                <img src={flagIcon} alt="flagIcon" className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-md font-bold whitespace-nowrap">EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <svg className="w-10 h-6 sm:w-12 sm:h-8 md:w-[53px] md:h-[34px]" viewBox="0 0 53 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.1411 2.04643C13.7749 0.831517 12.6558 0 11.3871 0C9.15456 0 5.60387 0 2.87634 0C1.96659 0 1.11034 0.430571 0.567595 1.16084C0.0251387 1.89112 -0.140244 2.8351 0.122355 3.70602C2.24875 10.7617 6.81361 25.909 8.47002 31.4061C8.83617 32.621 9.95531 33.4525 11.224 33.4525C13.4568 33.4525 17.0072 33.4525 19.7348 33.4525C20.6445 33.4525 21.5008 33.0219 22.0435 32.2917C22.5863 31.5614 22.7513 30.6174 22.4887 29.7462C20.3624 22.6908 15.7975 7.54319 14.1411 2.04643Z" fill="#ED1D25" />
              <path fillRule="evenodd" clipRule="evenodd" d="M31.637 2.04643C31.2709 0.831517 30.1521 0 28.8831 0C26.6505 0 23.0998 0 20.3723 0C19.4626 0 18.6063 0.430571 18.0636 1.16084C17.5211 1.89112 17.356 2.8351 17.6183 3.70602C19.3093 9.31725 22.4627 19.781 23.7927 24.1937C24.1586 25.4086 25.2777 26.2401 26.5464 26.2401C28.7792 26.2401 32.3296 26.2401 35.0572 26.2401C35.9672 26.2401 36.8232 25.8095 37.3659 25.0793C37.9087 24.349 38.0738 23.405 37.8112 22.5338C36.1202 16.9229 32.9667 6.45885 31.637 2.04643Z" fill="#ED1D25" />
              <path fillRule="evenodd" clipRule="evenodd" d="M49.2932 2.04643C48.9271 0.831517 47.8082 0 46.5392 0C44.3067 0 40.7563 0 38.0285 0C37.1187 0 36.2625 0.430571 35.72 1.16084C35.1773 1.89112 35.0122 2.8351 35.2748 3.70602C36.2932 7.08558 37.7604 11.9547 38.5818 14.68C38.9477 15.8949 40.0668 16.7261 41.3355 16.7261C43.5684 16.7261 47.1188 16.7261 49.8463 16.7261C50.7563 16.7261 51.6123 16.2958 52.155 15.5656C52.6978 14.8353 52.8629 13.8913 52.6003 13.0201C51.5818 9.64053 50.1144 4.77137 49.2932 2.04643Z" fill="#ED1D25" />
            </svg>

            <div className="flex flex-col leading-tight">
              <span className="font-black text-lg sm:text-xl md:text-2xl tracking-tight lowercase">premier</span>
              <span className="font-black text-lg sm:text-xl md:text-2xl tracking-tight lowercase">markets</span>
            </div>
          </div>

          {/* Center - Main navigation links - Desktop only */}
          <div className="hidden lg:flex items-center gap-7">
            <a href="#" className="text-[#010205] hover:text-gray-900 text-md font-normal flex items-center gap-3">
              Trading
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-[#010205] hover:text-gray-900 text-md font-normal flex items-center gap-3">
              Discover
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-[#010205] hover:text-gray-900 text-md font-normal flex items-center gap-3">
              Promotions
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-[#010205] hover:text-gray-900 text-md font-normal flex items-center gap-3">
              Company
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {/* Partner with us link - Desktop only */}
            <a href="#" className="hidden lg:flex items-center gap-3 text-[red] hover:text-premier-red-dark text-md font-normal">
              Partner with us
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right side - Partner link, Register button, and icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            {/* Register button - Hidden on very small screens, shown on sm+ */}
            <button className="hidden sm:block bg-[red] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-premier-red-dark transition-colors shadow-sm cursor-pointer">
              Register
            </button>
            <img src={userIcon} alt="userIcon" className="w-6 h-6 cursor-pointer" />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-gray-700 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              {/* Mobile navigation links */}
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-semibold flex items-center justify-between py-2">
                Trading
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-semibold flex items-center justify-between py-2">
                Discover
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-semibold flex items-center justify-between py-2">
                Promotions
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-semibold flex items-center justify-between py-2">
                Company
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              {/* Mobile Partner link */}
              <a href="#" className="flex items-center justify-between text-premier-red hover:text-premier-red-dark text-sm font-semibold py-2">
                Partner with us
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              {/* Mobile Register button */}
              <button className="bg-[red] text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-premier-red-dark transition-colors shadow-sm w-full sm:hidden">
                Register
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

