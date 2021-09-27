import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';


export const MySpinner = () => {
    const loading = useSelector(state => state.loading);


    useEffect(() => {
    }, []);

    return (
        <div>
            {loading.loading === true ? <ClipLoader color={"black"} loading={loading} size={50} /> : ""}

        </div>
    );
}
MySpinner.propTypes = {
    loading: PropTypes.bool
};