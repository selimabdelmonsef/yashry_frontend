import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './category.module.css';
import {CATEGORY_ITEMS} from '../../constants/category.constants';
// import { useSelector, useDispatch } from 'react-redux';

const Categories = ({
    categoryItems,
}) => {


    useEffect(() => {

      }, []);
    return (
        <div className={styles.categoryBase}>
        <ul className={styles.departments}>
        {CATEGORY_ITEMS.map((items)=>{
            return <li className={styles.departmentsItems}>{items.department_name}</li>
        })}
        </ul>
        </div>

    );
}

Categories.propTypes = {
    categoryItems: PropTypes.array,
}

export default Categories;