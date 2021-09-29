import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REDUCERS_CONSTANTS } from '../../../constants/reducers.constants';
import styles from './submit.module.css';



const Submit = () => {


    const productsState = useSelector(state => state.products);
    const minmax = useSelector(state => state?.minmax);
    const color = useSelector(state => state?.color);
    let productsColorFilter = [];
    let productsFilter = [];
    let productsPriceFilter = [];
    const dispatch = useDispatch();


    const updateProductsRequest = () => {
        productsPriceFilter = productsState?.products?.filter(minmaxPrice => minmax?.min <= minmaxPrice.price && minmaxPrice.price <= minmax?.max);
        productsFilter = productsPriceFilter;
        color?.color?.map((checkedColor) => {
            if (checkedColor.checked === true) {
                productsColorFilter = [...productsColorFilter, ...productsPriceFilter.filter(product => product.color === checkedColor.label)];
                productsFilter = productsColorFilter;
            }
        });
        dispatch({
            type: REDUCERS_CONSTANTS.PRODUCTS.UPDATE_PRODUCTS,
            data: productsFilter
        })
    }

    return (
        <button className={styles.submitBtn} onClick={() => updateProductsRequest()}>
            SUBMIT
        </button>

    );
}
export default Submit;