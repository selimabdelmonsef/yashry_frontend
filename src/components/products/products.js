import React, { useState, useEffect , useCallback} from 'react';
import styles from './products.module.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { api } from '../../constants/api.constants';
import { REDUCERS_CONSTANTS } from '../../constants/reducers.constants';



const Products = () => {
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();
    const [products, setProducts] = useState();

    const generateLoadingSpinner = useCallback(()=>{
        if(products?.length === undefined){
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
    },[products?.length, dispatch]);
    useEffect(() => {
        generateLoadingSpinner();
        axios.get(api.products_categoryId_api?.replace("{{categoryId}}", category?.data?.id || '1'))
            .then(response => setProducts(response.data))
    }, [category, generateLoadingSpinner]);


    return (
        <div className={styles.productsBase}>
            {products?.map((element, index) => {
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