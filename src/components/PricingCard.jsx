import React from 'react'
import ThirdButton from './ThirdButton'
import PriceIcon from '../assets/price-icon.svg'

function PricingCard({unit, number}) {
  return (
    <div className="pricing-plan-card">
                    <div className="pricing-plan-card-unit">
                        <h5>{unit}</h5>
                    </div>
                    <div className="pricing-plan-card-price">
                        <div className="pricing-plan-card-price-icon">
                            <img src={PriceIcon} alt="Dollar Icon" />
                        </div>
                        <div className="pricing-plan-card-price-number">
                            <h3>{number}</h3>
                        </div>
                        <div className="pricing-plan-card-price-month">
                            <h6>/month</h6>
                        </div>
                    </div>
                    <div className="pricing-plan-card-info">
                        <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                    </div>
                    <div className="pricing-plan-card-breakline">
                        <hr />
                    </div>
                    <div className="pricing-plan-card-features">
                        <div className="pricing-plan-card-feature">
                            <div className="pricing-plan-card-feature-list">
                                {/* <img src={ListIcon} alt="List Icon" /> */}
                                <span className="material-icons-outlined pricing-plan-card-feature-list-icon">check</span>
                            </div>
                            <div className="pricing-plan-card-feature-list-text">
                                <p>Nam nec ipsum in dolor</p>
                            </div>
                        </div>
                        <div className="pricing-plan-card-feature">
                            <div className="pricing-plan-card-feature-list">
                                <span className="material-icons-outlined pricing-plan-card-feature-list-icon">check</span>
                            </div>
                            <div className="pricing-plan-card-feature-list-text">
                                <p>Fusce nec ligula ut arcu</p>
                            </div>
                        </div>
                        <div className="pricing-plan-card-feature">
                            <div className="pricing-plan-card-feature-list">
                                <span className="material-icons-outlined pricing-plan-card-feature-list-icon">check</span>
                            </div>
                            <div className="pricing-plan-card-feature-list-text">
                                <p>Aliquam pulvinar arcu in</p>
                            </div>
                        </div>
                        <div className="pricing-plan-card-feature">
                            <div className="pricing-plan-card-feature-list">
                                <span className="material-icons-outlined pricing-plan-card-feature-list-icon">check</span>
                            </div>
                            <div className="pricing-plan-card-feature-list-text">
                                <p>Duis gravida enim porta</p>
                            </div>
                        </div>
                        <div className="pricing-plan-card-feature">
                            <div className="pricing-plan-card-feature-list">
                                <span className="material-icons-outlined pricing-plan-card-feature-list-icon">check</span>
                            </div>
                            <div className="pricing-plan-card-feature-list-text">
                                <p>Etiam eget libero non ligula</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-plan-card-button">
                        <ThirdButton text="Rent Now" />
                    </div>
                </div>
  )
}

export default PricingCard