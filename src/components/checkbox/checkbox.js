import React, { useState, useEffect } from 'react';
import { Checkbox } from "@blueprintjs/core";
import PropTypes from 'prop-types';

export const MyCheckBox = ({
    items,
    itemsSelected
}) => {

    const [itemsValue, setItemsValue] = useState(items);

    const updateValue = (index) => {
        const newArray = [...itemsValue];
        newArray[index].checked = !newArray[index].checked;
        setItemsValue(newArray);
        itemsSelected(newArray);
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
                        key={index}
                        onChange={() => updateValue(index)} />
                </div>
            })}
        </div>
    );
}
MyCheckBox.propTypes = {
    items: PropTypes.array
};