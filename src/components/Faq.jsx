// import React, { useEffect, useState } from 'react'
// import chevronIcon from '../assets/chevron-icon.svg'

// function Faq() {
//     const [faq, setFaq] = useState([]);

//     useEffect(() => {
//         fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
//             .then(response => response.json())
//             .then(data => setFaq(data))
//             .catch(error => console.error('Error fetching FAQs:', error));
//     }, []);

//   return (
//     <section className='faq'>
//         <div className="faq-inner">
//             <div className="faq-content">
//                 <div className="faq-content-titles-and-text">
//                     <h4>FAQs</h4>
//                     <h3>Frequently Ask Questions</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//                 </div>
//                 <div className="faq-content-accordions">
//                     <div className="faq-content-accordion-container">
//                         <button className='faq-content-accordion'>{faq[0]?.title}
//                             <div className="faq-content-accordion-icon">
//                                 <img src={chevronIcon} alt="Chevron Icon" />
//                             </div>
//                         </button>
//                         <div className="faq-content-accordion-panel">
//                             <p>{faq[0]?.description}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Faq


import React, { useEffect, useState } from 'react'
import chevronIcon from '../assets/chevron-icon.svg'

function Faq() {
    const [faq, setFaq] = useState([]);
    const [openAccordion, setOpenAccordion] = useState(null);

    useEffect(() => {
        fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
            .then(response => response.json())
            .then(data => setFaq(data))
            .catch(error => console.error('Error fetching FAQs:', error));
    }, []);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className='faq'>
            <div className="faq-inner">
                <div className="faq-content">
                    <div className="faq-content-titles-and-text">
                        <h4>FAQs</h4>
                        <h3>Frequently Ask Questions</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="faq-content-accordions">
                        {faq.map((item, index) => (
                            <div key={index} className="faq-content-accordion-container">
                                <button 
                                    className={`faq-content-accordion ${openAccordion === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {item.title}
                                    <div className="faq-content-accordion-icon">
                                        <img 
                                            src={chevronIcon} 
                                            alt="Chevron Icon"
                                            className={openAccordion === index ? 'rotated' : ''}
                                        />
                                    </div>
                                </button>
                                {openAccordion === index && (
                                    <div className="faq-content-accordion-panel">
                                        <p>{item.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq