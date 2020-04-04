import React from 'react';
import './Searchbox.Styles.css';

export const SearchBox = ( { placeholder,handlechange }) => 
(
    <input type ='search' className = 'search' placeholder = {placeholder} onChange= { handlechange }/>
)