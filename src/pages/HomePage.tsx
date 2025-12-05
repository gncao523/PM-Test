import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FinancialCards from '../components/FinancialCards'
import MarketsSection from '../components/MarketsSection'
import ChartSection from '../components/ChartSection'
import EmpowerSection from '../components/EmpowerSection'
import WithdrawSection from '../components/WithdrawSection'
import TrustSection from '../components/TrustSection'
import TradeSection from '../components/TradeSection'
import PremierSection from '../components/PremierSection'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FinancialCards />
      <MarketsSection />
      <TrustSection />
      <ChartSection />
      <EmpowerSection />
      <WithdrawSection />
      <TradeSection />
      <PremierSection />
    </div>
  )
}

export default HomePage

