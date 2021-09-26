import React, { useState, useEffect } from 'react';
import PriceRange from './price/price_range';
import ColorChoose from './color/colorChoose';
import styles from './filters.module.css';

const Filters = () => {


    useEffect(() => {
      }, []);

    return (
        <div className={styles.filtersBase}>
            Filters
            <PriceRange/>
            <ColorChoose/>

        </div>

    );
}
export default Filters;