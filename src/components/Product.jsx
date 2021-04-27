import React from 'react'
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/veg-burger.png';
import pimage3 from '../images/shack-burger.png'

function Product() {
    return (
        <div id="products">
            <h1>CHOOSE & ENJOY</h1>
            <p>Why are they called hamburgers if there's no ham in them?
            They actually get their name from Hamburg, Germany, home of
            a cut of beef called the Hamburg steak that eventually
            evolved into what we now consider hamburgers.</p>
            <div className="a-container">
                <Productbox image={pimage1} title="Luger Burger" />
                <Productbox image={pimage2} title="Veg Burger" />
                <Productbox image={pimage3} title="Shack Burger" />
            </div>
        </div>
    )
}

export default Product
