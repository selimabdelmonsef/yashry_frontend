import React, { useState, useEffect } from 'react';
import { api } from '../../constants/api.constants';
import styles from './category.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { REDUCERS_CONSTANTS } from '../../constants/reducers.constants';


const Categories = () => {
    const [categories, setCategories] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(api.category_api).then((response) => setCategories(response))
    }, [categories]);
    const categoryHandler = (categorySelected) => {
        dispatch({
            type: REDUCERS_CONSTANTS.CATEGORY.GET_CATEGORY,
            data: categorySelected
        })
    }
    return (
        <div className={styles.categoryBase}>
            <ul className={styles.departments}>
                {categories?.data.map((items) => {
                    return <li onClick={() => categoryHandler(items)} className={styles.departmentsItems}>{items?.name}</li>
                })}
            </ul>
        </div>

    );
}
export default Categories;