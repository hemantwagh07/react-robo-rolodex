import React from 'react';
import './search-box.css'

export const SearchBox = ({ placeholder, handleChange }) => {
    return <input type='search'
        className='searchbox'
        placeholder={placeholder}
        onChange={handleChange} />
}