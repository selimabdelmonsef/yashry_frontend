import React, { useEffect } from 'react';
import SearchBar from '../../searchBar/searchBar';
import styles from './colorChoose.module.css';
import { MyCheckBox } from '../../checkbox/checkbox';
import {COLORS} from '../../../constants/colors.constants';

const ColorChoose = () => {

    const colors = COLORS.map((color)=>{
        return {
            label:color,
            checked:false,
            value:color
        }
    });
    useEffect(()=>{
    },[colors])


    return (
        <div className={styles.chooseColor}>

            Color
            <SearchBar placeholder={"Enter Color"} />
            <div className={styles.checkbox}>
                <MyCheckBox items = {colors}/>
            </div>
        </div>
    );
}
export default ColorChoose;