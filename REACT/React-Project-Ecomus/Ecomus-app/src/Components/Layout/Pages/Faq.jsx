import React from 'react'
import FaqSection from '../../Helping-Components/FaqSection'
import FaqTitle from '../../Helping-Components/FaqTitle'
import FooterWhite from '../../Helping-Components/FooterWhite'

const Faq = () => {
  return (
    <div className='flex flex-col gap-4 px-2'>
        <FaqTitle/>
      <FaqSection/>
      <FooterWhite/>
    </div>
  )
}

export default Faq
