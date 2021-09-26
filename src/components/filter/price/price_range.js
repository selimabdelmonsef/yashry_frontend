import React, { useState, useEffect } from 'react';
import MultiRangeSlider from '../../multiRangeSlider/multiRangeSlider.js';

const PriceRange = () => {


    const [minPriceRange, setMinPriceRange]=useState(100);
    useEffect(() => {
      }, [minPriceRange]);

    return (
<div>
    <h6>Price Range</h6>
        <MultiRangeSlider
         
      min={minPriceRange}
      max={1000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    //   onChange={({ min, max }) => setMinPriceRange(min)}

    />
    </div>


    );
}
export default PriceRange;