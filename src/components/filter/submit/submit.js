import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REDUCERS_CONSTANTS } from '../../../constants/reducers.constants';
import styles from './submit.module.css';



const Submit = () => {
    
    const productsState = useSelector(state => state.products);
    const minmax = useSelector(state => state?.minmax);
    const dispatch = useDispatch();
    const updateProductsRequest = () => {
        console.log(minmax?.min, minmax?.max);
        if (minmax?.min > 100 || minmax?.max < 1000) {
            let productsPriceRange = productsState?.products.filter(minmaxPrice => minmax?.min <= minmaxPrice.price && minmaxPrice.price <= minmax?.max);
            dispatch({
                type: REDUCERS_CONSTANTS.PRODUCTS.UPDATE_PRODUCTS,
                data: productsPriceRange
            })
        }
console.log(productsState);
    }
    return (
       <button className={styles.submitBtn}onClick={()=>updateProductsRequest()}>
           SUBMIT
       </button>

    );
}
export default Submit;