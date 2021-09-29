import React from "react";
import PropTypes from 'prop-types';
import styles from './searchBar.module.css';

function SearchBar({
    placeholder,handleChange }) {
    return (
        <div> 
        <input placeholder={placeholder} onChange={handleChange} className={styles.inputStyle}></input>  
        </div>
    );
}
SearchBar.propTypes = {
    placeholder: PropTypes.string
};

export default SearchBar;