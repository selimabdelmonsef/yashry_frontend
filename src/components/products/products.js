import React, {useEffect } from 'react';
import styles from './products.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { api } from '../../constants/api.constants';
import { REDUCERS_CONSTANTS } from '../../constants/reducers.constants';
import useFetch from '../fetch/useFetch';
import { MySpinner } from '../spinner/spinner';

const Products = () => {
    const category = useSelector(state => state.category);
    const productState = useSelector(state => state.products);
    const dispatch = useDispatch();
    
    const { data: products, isPending, error } = useFetch(api.products_categoryId_api.replace("{{categoryId}}", category?.data?.id || '1'));
    
    useEffect(() => {
        setData();
    }, [products]);

    const setData = () => {
        dispatch({
            type: REDUCERS_CONSTANTS.PRODUCTS.GET_PRODUCTS,
            data: products

        })
        dispatch({
            type: REDUCERS_CONSTANTS.PRODUCTS.UPDATE_PRODUCTS,
            data: products
        })
    }

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div><MySpinner title="Loading products..."/></div>}

            {productState?.updatedProducts && <div className={styles.productsBase}>
                {productState?.updatedProducts?.map((element, index) => {
                    return <div className={styles.productsElements}>
                        <img className={styles.imageStyle} src={element?.image + index} alt="" />
                        <div className={styles.productName}>{element?.name}</div>
                        <div className={styles.productPrice}>{element?.price} {element?.currency}</div>
                    </div>
                })}
            </div>}

        </div>

    );
}
export default Products;