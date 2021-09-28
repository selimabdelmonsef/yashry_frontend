import React, { useState, useEffect } from 'react';
import MultiRangeSlider from '../../multiRangeSlider/multiRangeSlider.js';
import { useDispatch } from 'react-redux';
import { REDUCERS_CONSTANTS } from '../../../constants/reducers.constants.js';


const PriceRange = () => {


    const dispatch = useDispatch();

    const setMinMaxPriceRange=(min, max)=>{
      dispatch({
        type: REDUCERS_CONSTANTS.RANGE.MIN_RANGE,
        data: min
      });
      dispatch({
        type: REDUCERS_CONSTANTS.RANGE.MAX_RANGE,
        data: max
      });

    }
  

    return (
<div>
    <h6>Price Range</h6>
        <MultiRangeSlider
      min={20}
      max={1000}
      onChange={({ min, max }) => setMinMaxPriceRange(min,max)}

    />
    </div>


    );
}
export default PriceRange;