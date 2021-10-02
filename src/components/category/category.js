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
    const [currentItem, setCurrentItem] = useState(1);
    const categoryHandler = (categorySelected) => {
        dispatch({
            type: REDUCERS_CONSTANTS.CATEGORY.GET_CATEGORY,
            data: categorySelected
        });
        setCurrentItem(categorySelected.id);
    };

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div><MySpinner /></div>}
            {categories && <div className={styles.categoryBase}>
                <ul className={styles.departments}>
                    {categories.map((item) => {
                        return <li onClick={() => categoryHandler(item)} className={styles.departmentsItems}>
                                <button className={`${styles.departmentsBtn} ${item.id===currentItem?styles.selectedBtn:''}`}>{item?.name}</button>
                            </li>
                    })}
                </ul>
            </div>}

        </div>

    );
}
export default Categories;