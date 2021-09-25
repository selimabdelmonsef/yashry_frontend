import React, { useState, useEffect } from 'react';
import {api} from '../../constants/api.constants';
import styles from './category.module.css';
import axios from 'axios';

const Categories = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
         axios.get(api.category_api).then((response) => setCategories(response))
      }, [categories]);

    return (
        <div className={styles.categoryBase}>
            <ul className={styles.departments}>
                {categories?.data.map((items) => {
                    return <li className={styles.departmentsItems}>{items?.name}</li>
                })}
            </ul>
        </div>

    );
}
export default Categories;