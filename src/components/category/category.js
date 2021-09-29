import React, { useState, useEffect } from 'react';
import { api } from '../../constants/api.constants';
import styles from './category.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { REDUCERS_CONSTANTS } from '../../constants/reducers.constants';
import useFetch from '../fetch/useFetch';
import { MySpinner } from '../spinner/spinner';


const Categories = () => {
    const dispatch = useDispatch();
    const { data: categories, isPending, error } = useFetch(api.category_api);
    const categoryHandler = (categorySelected) => {
        dispatch({
            type: REDUCERS_CONSTANTS.CATEGORY.GET_CATEGORY,
            data: categorySelected
        });
    };

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div><MySpinner /></div>}
            {categories && <div className={styles.categoryBase}>
                <ul className={styles.departments}>
                    {categories.map((items) => {
                        return <li onClick={() => categoryHandler(items)} className={styles.departmentsItems}>
                            <button className={styles.departmentsBtn}>{items?.name}</button>
                            </li>
                    })}
                </ul>
            </div>}

        </div>

    );
}
export default Categories;