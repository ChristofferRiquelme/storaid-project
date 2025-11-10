import React from 'react'
import PricingCard from './PricingCard'

function PricingPlan() {
  return (
    <section className='pricing-plan'>
        <div className="pricing-plan-inner">
            <div className="pricing-plan-subtitle-and-title">
                <h4>Pricing Plan</h4>
                <h3>Find the Perfect Plan for Your Storage Needs</h3>
            </div>
            <div className="pricing-plan-cards">
                <PricingCard unit="Small Unit" number="50" />
                <PricingCard unit="Medium Unit" number="100" />
                <PricingCard unit="Large Unit" number="150" />
                <PricingCard unit="Executive Unit" number="200" />
            </div>
        </div>
    </section>
  )
}

export default PricingPlan