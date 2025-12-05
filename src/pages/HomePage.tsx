import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FinancialCards from '../components/FinancialCards'
import MarketsSection from '../components/MarketsSection'
import ChartSection from '../components/ChartSection'
import EmpowerSection from '../components/EmpowerSection'
import TrustSection from '../components/TrustSection'

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
    </div>
  )
}

export default HomePage

