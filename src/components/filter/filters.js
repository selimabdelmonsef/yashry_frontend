import React, { useEffect } from 'react';
import PriceRange from './price/price_range';
import ColorChoose from './color/colorChoose';
import styles from './filters.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { REDUCERS_CONSTANTS } from '../../constants/reducers.constants';
import Submit from './submit/submit';


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
            <Submit/>
        </div>

    );
}
export default Filters;