import React, { useState, useEffect } from 'react';
import { Checkbox } from "@blueprintjs/core";
import PropTypes from 'prop-types';

export const MyCheckBox = ({
    items,

}) => {

    const[itemsValue, setItemsValue]= useState(items);

const updateValue = (index)=>{
const newArray = [...itemsValue];
newArray[index].checked = !newArray[index].checked;

    setItemsValue(newArray);
    console.log("newArray:",newArray);
    console.log("Items Value:",itemsValue);

}
    useEffect(() => {
    }, []);

    return (
        <div>
            {itemsValue?.map((item, index) => {
                return <div>
                    <Checkbox 
                    checked={item?.checked} 
                    label={item?.label} 
                    value={item?.value} 
                    onChange={()=>updateValue(index)}/>
                    </div>
            })}
        </div>
    );
}
MyCheckBox.propTypes = {
    items: PropTypes.array
};