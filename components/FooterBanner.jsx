import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'
const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
        <p>{discount}</p>
        <h3>YEAR-END</h3>
        <h3>SALE</h3>
        <p>{saleTime}</p>
        </div>
        <div className='right'>
            <p>{smallText}</p>
            <h3>Value Buy</h3>
            <p>Fastest Growing Audio Brand in the world! </p>
            <Link href={`/product/${product}`}>
        <button type='button'>{buttonText}</button>
       </Link>
        </div>
      </div>
      <img src={urlFor(image)} alt="" className='footer-banner-image'/>
    </div>
  )
}
export default FooterBanner
