import React from "react";
import PropTypes from 'prop-types';
import styles from './searchBar.module.css';

function SearchBar({
    placeholder }) {
    return (

        <div> 
        <input placeholder={placeholder} className={styles.inputStyle}></input>  
        </div>
    );
}
SearchBar.propTypes = {
    placeholder: PropTypes.string
};

export default SearchBar;