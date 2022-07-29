import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668" alt="checkout_ad" />
            <div>
                <h2 className="checkout_title">Your shopping basket</h2>
                {/* subitem */}
                {/* subitem */}
                {/* subitem */}
                {/* subitem */}
            </div>
        </div>
        <div className="checkout_right">
            <h2>subtotal here</h2>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout