import React, { useState, useEffect, useCallback } from 'react';
import styles from './products.module.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { api } from '../../constants/api.constants';
import { REDUCERS_CONSTANTS } from '../../constants/reducers.constants';



const Products = () => {
    const category = useSelector(state => state.category);
    const [products, setProducts] = useState();
    const productState = useSelector(state => state.products);
    const dispatch = useDispatch();
    const useMountEffect = (fun) => useEffect(fun, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getProductsData = () => {
        axios.get(api.products_categoryId_api
            .replace("{{categoryId}}", category?.data?.id || '1'))
            .then(response => dispatch({
                type: REDUCERS_CONSTANTS.PRODUCTS.GET_PRODUCTS,
                data: response.data
            })).then(response => dispatch({
                type: REDUCERS_CONSTANTS.PRODUCTS.UPDATE_PRODUCTS,
                data: response.data
            }));


    };
    useMountEffect(getProductsData);

    const generateLoadingSpinner = useCallback(() => {
        if (productState?.updatedProducts?.length === undefined) {
            dispatch({
                type: REDUCERS_CONSTANTS.LOADING,
                data: true
            })
        }
        else {
            dispatch({
                type: REDUCERS_CONSTANTS.LOADING,
                data: false
            })
        }
    }, [productState, dispatch]);


    useEffect(() => {
        generateLoadingSpinner();
    }, [generateLoadingSpinner]);


    return (
        <div className={styles.productsBase}>
            {productState?.updatedProducts?.map((element, index) => {
                return <div className={styles.productsElements}>
                    <img className={styles.imageStyle} src={element?.image + index} alt="" />
                    <div>{element?.name}</div>
                    <div>{element?.price} {element?.currency}</div>
                </div>
            })}

        </div>

    );
}
export default Products;