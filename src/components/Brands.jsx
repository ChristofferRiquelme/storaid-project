import React from 'react'
import BrandImage1 from '../assets/brand1.svg'
import BrandImage2 from '../assets/brand2.svg'
import BrandImage3 from '../assets/brand3.svg'
import BrandImage4 from '../assets/brand4.svg'
import BrandImage5 from '../assets/brand5.svg'

function Brands() {
  return (
    <section className='brands'>
        <div className='brands-inner'>
            <div className="brands-item">
                <img src={BrandImage1} alt="" />
            </div>
            <div className="brands-item">
                <img src={BrandImage2} alt="" />
            </div>
            <div className="brands-item">
                <img src={BrandImage3} alt="" />
            </div>
            <div className="brands-item">
                <img src={BrandImage4} alt="" />
            </div>
            <div className="brands-item">
                <img src={BrandImage5} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Brands