import React from 'react'

interface FinancialCardProps {
  icon: React.ReactNode
  label: string
  value: string
  change: string
  isPositive: boolean
}

const FinancialCard: React.FC<FinancialCardProps> = ({ icon, label, value, change, isPositive }) => {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-md">
      <div className="mb-4">{icon}</div>
      <div className="text-sm font-bold text-gray-700 mb-3">{label}</div>
      {/* Mini chart with colored trend line */}
      <div className="w-20 h-10 mb-3 flex items-end justify-center gap-1">
        <div className={`w-1.5 h-3 ${isPositive ? 'bg-green-500' : 'bg-red-500'} rounded-t`}></div>
        <div className={`w-1.5 h-4 ${isPositive ? 'bg-green-500' : 'bg-red-500'} rounded-t`}></div>
        <div className={`w-1.5 h-5 ${isPositive ? 'bg-green-500' : 'bg-red-500'} rounded-t`}></div>
        <div className={`w-1.5 h-6 ${isPositive ? 'bg-green-500' : 'bg-red-500'} rounded-t`}></div>
        <div className={`w-1.5 h-5 ${isPositive ? 'bg-green-500' : 'bg-red-500'} rounded-t`}></div>
      </div>
      <div className="text-xl font-bold text-gray-900 mb-1">{value}</div>
      <div className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {change}
      </div>
    </div>
  )
}

const FinancialCards: React.FC = () => {
  const cards = [
    {
      icon: (
        <div className="relative w-12 h-12">
          {/* US Flag (top, partially visible) */}
          <div className="absolute top-0 left-0 w-10 h-6 bg-blue-600 rounded overflow-hidden" style={{ zIndex: 2 }}>
            <div className="h-full flex flex-col">
              <div className="h-1 bg-red-600"></div>
              <div className="h-1 bg-white"></div>
              <div className="h-1 bg-red-600"></div>
              <div className="h-1 bg-white"></div>
              <div className="h-1 bg-red-600"></div>
              <div className="h-1 bg-white"></div>
            </div>
            <div className="absolute top-0 left-0 w-4 h-3 bg-blue-600"></div>
          </div>
          {/* EU Flag (bottom, fully visible) */}
          <div className="absolute bottom-0 right-0 w-10 h-6 bg-blue-500 rounded overflow-hidden" style={{ zIndex: 1 }}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                <div className="text-[6px] text-blue-500 font-bold">★</div>
              </div>
            </div>
          </div>
        </div>
      ),
      label: 'USD/EUR',
      value: '0.00014',
      change: '-234.45',
      isPositive: true, // Green trend for USD/EUR
    },
    {
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
          <div className="flex flex-col gap-0.5">
            <div className="w-6 h-1 bg-yellow-700 rounded"></div>
            <div className="w-6 h-1 bg-yellow-700 rounded"></div>
            <div className="w-6 h-1 bg-yellow-700 rounded"></div>
          </div>
        </div>
      ),
      label: 'XAUUSD',
      value: '0.00014',
      change: '-234.45',
      isPositive: false, // Red trend for XAUUSD
    },
    {
      icon: (
        <div className="relative w-12 h-12">
          {/* US Flag (top, partially visible) */}
          <div className="absolute top-0 left-0 w-10 h-6 bg-blue-600 rounded overflow-hidden" style={{ zIndex: 2 }}>
            <div className="h-full flex flex-col">
              <div className="h-1 bg-red-600"></div>
              <div className="h-1 bg-white"></div>
              <div className="h-1 bg-red-600"></div>
              <div className="h-1 bg-white"></div>
              <div className="h-1 bg-red-600"></div>
              <div className="h-1 bg-white"></div>
            </div>
            <div className="absolute top-0 left-0 w-4 h-3 bg-blue-600"></div>
          </div>
          {/* EU Flag (bottom, fully visible) */}
          <div className="absolute bottom-0 right-0 w-10 h-6 bg-blue-500 rounded overflow-hidden" style={{ zIndex: 1 }}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                <div className="text-[6px] text-blue-500 font-bold">★</div>
              </div>
            </div>
          </div>
        </div>
      ),
      label: 'USD/EUR',
      value: '0.00014',
      change: '-234.45',
      isPositive: true, // Green trend for USD/EUR
    },
    {
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
          <div className="flex flex-col gap-0.5">
            <div className="w-6 h-1 bg-yellow-700 rounded"></div>
            <div className="w-6 h-1 bg-yellow-700 rounded"></div>
            <div className="w-6 h-1 bg-yellow-700 rounded"></div>
          </div>
        </div>
      ),
      label: 'XAUUSD',
      value: '0.00014',
      change: '-234.45',
      isPositive: false, // Red trend for XAUUSD
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <FinancialCard
              key={index}
              icon={card.icon}
              label={card.label}
              value={card.value}
              change={card.change}
              isPositive={card.isPositive}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinancialCards

