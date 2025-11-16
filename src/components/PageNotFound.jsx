import React from 'react'
import PrimaryButton from './PrimaryButton'

function PageNotFound() {
  return (
    <section className='page-not-found'>
        <div className="page-not-found-inner">
            <div className="page-not-found-content">
                <h5>Oops!</h5>
                <h1>Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist. It may have been moved, removed altogether or is temporarily unavailable.</p>
                <div className="page-not-found-button">
                    <PrimaryButton text="Back To Home" link="/" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageNotFound