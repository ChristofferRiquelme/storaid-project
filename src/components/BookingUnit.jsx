import React from 'react'
import BookingUnitImage from '../assets/booking-unit-image.svg'
import BookingUnitForm from './BookingUnitForm'

function BookingUnit() {
  return (
    <section className='booking-unit'>
        <div className="booking-unit-inner">
            <div className="booking-unit-content">
                <div className="booking-unit-subtitle">
                    <h4>Booking Unit</h4>
                </div>
                <div className="booking-unit-title-and-text">
                    <div className="booking-unit-title">
                        <h3>Book Your Storage Unit Now & Simplify Your Life!</h3>
                    </div>
                    <div className="booking-unit-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                    </div>
                </div>
                <div className="booking-unit-image-and-form">
                    <div className="booking-unit-image">
                        <img src={BookingUnitImage} alt="Booking Unit Image" />
                    </div>
                    <div className="booking-unit-form">
                        <BookingUnitForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookingUnit