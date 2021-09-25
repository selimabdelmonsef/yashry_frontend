import React, { useState, useEffect } from 'react';
import MultiRangeSlider from '../../multiRangeSlider/multiRangeSlider.js';
import styles from './price_range.module.css';

const PriceRange = () => {


    const [minPriceRange, setMinPriceRange]=useState(100);
    useEffect(() => {
      }, [minPriceRange]);

      const clearPriceRange=()=>{
    setMinPriceRange(0);
    console.log(minPriceRange);
      }

    return (
<div>
    <h6>Price Range</h6>
        <MultiRangeSlider
         
      min={minPriceRange}
      max={1000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    //   onChange={({ min, max }) => setMinPriceRange(min)}

    />
    {/* <div className={styles.clearRange}>
    <h7 onClick={()=>clearPriceRange()}className={styles.xStyle}>X </h7>
    <h7 >CLEAR</h7>

    </div> */}
   
    </div>


    );
}
export default PriceRange;