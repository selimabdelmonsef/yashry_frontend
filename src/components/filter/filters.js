import React, { useState, useEffect } from 'react';
import PriceRange from './price/price_range';
import styles from './filters.module.css';

const Filters = () => {


    useEffect(() => {
      }, []);

    return (
        <div className={styles.filtersBase}>
            Filters
            <PriceRange/>
        </div>

    );
}
export default Filters;