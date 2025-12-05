import React from 'react'
import sectionBg from '../assets/images/premierbg.png'

// Icon components
const HeadphoneIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1C8.13 1 5 4.13 5 8V14C5 15.66 6.34 17 8 17H9V10H8C7.45 10 7 9.55 7 9V8C7 4.69 9.69 2 13 2C16.31 2 19 4.69 19 8V9C19 9.55 18.55 10 18 10H17V17H18C19.66 17 21 15.66 21 14V8C21 4.13 17.87 1 14 1H12Z" fill="#FC1B1B"/>
  </svg>
)

const MailIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#FC1B1B"/>
  </svg>
)

const GlobeIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19.93C11.5 19.65 10.35 18.5 10.07 17H13V19.93ZM13 15H10.07C10.35 13.5 11.5 12.35 13 12.07V15ZM15 19.93V17H17.93C17.65 18.5 16.5 19.65 15 19.93ZM17.93 15H15V12.07C16.5 12.35 17.65 13.5 17.93 15ZM11 4.07C9.5 4.35 8.35 5.5 8.07 7H11V4.07ZM11 9H8.07C8.35 10.5 9.5 11.65 11 11.93V9ZM15 4.07V7H17.93C17.65 5.5 16.5 4.35 15 4.07ZM15 11.93C16.5 11.65 17.65 10.5 17.93 9H15V11.93ZM4 12C4 11.38 4.08 10.79 4.21 10.21L6.5 12.5V13.5C6.5 14.33 7.17 15 8 15H9.5V16.5C9.5 17.33 10.17 18 11 18H12.5V19.79C11.21 19.92 10.62 20 10 20C6.69 20 4 17.31 4 14V12ZM19.79 13.79C19.92 13.21 20 12.62 20 12C20 8.69 17.31 6 14 6C13.38 6 12.79 6.08 12.21 6.21L14.5 8.5V9.5C14.5 10.33 15.17 11 16 11H17.5V12.5C17.5 13.33 18.17 14 19 14H19.79V13.79Z" fill="#FC1B1B"/>
  </svg>
)

interface Testimonial {
  text: string
  name: string
  initials: string
  icon: 'headphone' | 'mail' | 'globe'
}

const testimonials: Testimonial[] = [
  {
    text: "I'm new in trading and I really like that Premier let me start small. I can trade crypto and few other assets easy. Withdrawls are quick too. Help Center is simple to use and I learned a lot from there.",
    name: "Adam Keller",
    initials: "AK",
    icon: "headphone"
  },
  {
    text: "Premier works well for me. KYC was fast and support people (Thx milos!!) helped me right away when I had a question. I was able to deposit and start trading in same day. Withdrawal came to my bank after 2 days. All smooth",
    name: "Lucas Vermeer",
    initials: "LV",
    icon: "headphone"
  },
  {
    text: "Been using Premier for about 3 months now. Card deposits go through right away and show in balance within a minute. I withdraw my profit each month and it's always in my bank by end of day. Very happy.",
    name: "David Lorens",
    initials: "DL",
    icon: "mail"
  },
  {
    text: "My experince with PM is perfect so far. Payouts come same day few hours max. Works good with both crypto and credit card. You can take money out many times per day and no hidden fees Spreads are ok too 😊",
    name: "Marco Lazzari",
    initials: "ML",
    icon: "globe"
  },
  {
    text: "I think Premier's trading cost are low compare to others Spreads are good on most pairs, deposit is free, for withdraw they have a small fee but it's fine. Thanks guys",
    name: "Petar Ilic",
    initials: "PL",
    icon: "mail"
  },
  {
    text: "Premier is a serious broker. Web platform looks nice and runs good. Support reply quick and helpful. Sometimes small slippage in busy time but nothing crazy. Commisions are low so I stay here.",
    name: "Mark \"Clips\" Renard",
    initials: "MR",
    icon: "mail"
  },
  {
    text: "Good service 😊 Never had a single problem with withdraw. Usually takes under 24 hours. You get update when it's submitted and when it's done. Got many assets to trade and the spreads are not bad. And mT5 Thank you!",
    name: "TradeAce92",
    initials: "TA",
    icon: "headphone"
  },
  {
    text: "Multiple withdraws made, all success Used both bank and international transfer. Also few friends joined from my referral and no issue for them. Been here long time, still all fine.",
    name: "Shivani Kaur",
    initials: "SK",
    icon: "globe"
  },
  {
    text: "Deposit and withdraws are fast. One time my payout came before my bank even show the deduction lol. Trade speed is good and data feed fast too. Feels like pro level broker.",
    name: "Mateusz Durek",
    initials: "MD",
    icon: "mail"
  }
]

const PremierSection: React.FC = () => {
  const getIcon = (iconType: 'headphone' | 'mail' | 'globe') => {
    switch (iconType) {
      case 'headphone':
        return <HeadphoneIcon />
      case 'mail':
        return <MailIcon />
      case 'globe':
        return <GlobeIcon />
      default:
        return <MailIcon />
    }
  }

  return (
    <section className="relative">
      <img src={sectionBg} alt="premier" className="absolute top-0 left-0 w-full h-400 object-cover z-0" />
      <div className="relative top-0 max-w-7xl mx-auto py-20 px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-['Gilroy'] text-black mb-4">
            What <span className="text-[#FC1B1B]">Premier</span> Traders are saying about us
          </h2>
          <p className="text-base lg:text-lg text-[#737373] font-['UrbanistRegular'] mb-6">
            Join a growing community of professionals who rely on our platform to trade smarter every day.
          </p>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 9L4.5 6L7.5 3" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 9L7.5 6L4.5 3" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Testimonial Text */}
              <p className="text-sm text-[#252B42] mb-6 font-['UrbanistRegular'] leading-relaxed">
                {testimonial.text}
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                    <span className="text-white text-sm font-['Gilroy']">
                      {testimonial.initials}
                    </span>
                  </div>
                  {/* Name */}
                  <span className="text-sm font-['Gilroy'] text-black">
                    {testimonial.name}
                  </span>
                </div>
                {/* Icon */}
                <div className="flex-shrink-0">
                  {getIcon(testimonial.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PremierSection

