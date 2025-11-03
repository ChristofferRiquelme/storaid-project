import React from 'react'
import BrandsImage from '../assets/brands.svg'

function Brands() {
  return (
    <section className='brands'>
        <div className='brands-inner'>
            <img src={BrandsImage} alt="" />
        </div>
    </section>
  )
}

export default Brands