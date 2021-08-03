import React, {useState} from 'react';
import PropTypes from 'prop-types'

import {
    SearchbarCont,
    SearchForm,
    SearchFormBtn,
    SearchFormBtnLabel,
    SearchFormInput,
} from './Searchbar.styles';

export const Searchbar =({ onSubmit })=> {
    const [searchQuery, setSearchQuery] = useState('');

   const handleInputValue = evt => {
        const { value } = evt.currentTarget;
            setSearchQuery (value.toLowerCase())
        
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        if (searchQuery.trim() === '') {
            return;
        }
        
        onSubmit(searchQuery);
        resetForm();
    };

    const resetForm = () => {
        setSearchQuery ('')
    };

        return (
            <SearchbarCont>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchFormBtn type="submit">
                        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                    </SearchFormBtn>

                    <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchQuery}
                        onChange={handleInputValue}
                    />
                </SearchForm>
            </SearchbarCont>
        );
    
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};