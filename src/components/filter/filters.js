import React, { useEffect } from 'react';
import PriceRange from './price/price_range';
import ColorChoose from './color/colorChoose';
import styles from './filters.module.css';

const Filters = () => {


    useEffect(() => {
    }, []);

    return (
        <div className={styles.filtersContainer}>
            <div className={styles.filtersBase}>
                Filters
                <div className={styles.priceRange}><PriceRange /></div>    
            
            <ColorChoose />
            </div>

        </div>

    );
}
export default Filters;