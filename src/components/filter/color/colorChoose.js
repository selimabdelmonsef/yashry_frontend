import React, { useEffect } from 'react';
import SearchBar from '../../searchBar/searchBar';
import styles from './colorChoose.module.css';
import { MyCheckBox } from '../../checkbox/checkbox';
import {COLOR} from '../../../constants/color.constants';
import { useDispatch } from 'react-redux';
import { REDUCERS_CONSTANTS } from '../../../constants/reducers.constants';


const ColorChoose = () => {

    const dispatch = useDispatch();
    const color = COLOR.map((color)=>{
        return {
            label:color,
            checked:false,
            value:color
        }
    });
    useEffect(()=>{
    },[color])

    const updateColor = (colorsChecked)=>{
        dispatch({
      type: REDUCERS_CONSTANTS.COLOR.GET_COLOR,
      data: colorsChecked
        })
        // console.log('update', colorsChecked)

    }

    return (
        <div className={styles.chooseColor}>

            <div className={styles.colorStyle}>Color</div>

            <SearchBar placeholder={"Enter Color"} />
            <div className={styles.checkbox}>
                <MyCheckBox items = {color} itemsSelected={(value)=>updateColor(value)}/>
            </div>
        </div>
    );
}
export default ColorChoose;