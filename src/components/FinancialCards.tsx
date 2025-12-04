import React from 'react'
import fcard1 from '../assets/images/fcard-1.png'
import fcard2 from '../assets/images/fcard-2.png'
import fcard3 from '../assets/images/fcard-3.png'
import fcard4 from '../assets/images/fcard-4.png'

const FinancialCards: React.FC = () => {
  const cards = [
    { id: 1, image: fcard1, alt: 'Financial Card 1' },
    { id: 2, image: fcard2, alt: 'Financial Card 2' },
    { id: 3, image: fcard3, alt: 'Financial Card 3' },
    { id: 4, image: fcard4, alt: 'Financial Card 4' },
  ]

  return (
    <section className="px-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinancialCards

