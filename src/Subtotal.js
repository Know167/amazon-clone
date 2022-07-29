import React from 'react'
import "./Subtotal.css"
import curfor from "react-currency-format"

function Subtotal() {
  return (
    <div className='subtotal'>
        <curfor>
            renderText={(value)=>(
                <>
                <p>Subtotal (0 items): <strong>0</strong></p>
                <small className="subtotal_gift"><input type="checkbox" />This order contains a gift</small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        </curfor>
    </div>
  )
}

export default Subtotal