// import { Component } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  SearchBtn,
  SearchBtnLabel,
  Input,
} from './Searchbar.styled';

export default function SearchImages({ onFormSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Enter search query!');
      return;
    }
    onFormSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <SearchBtnLabel>Search</SearchBtnLabel>
        </SearchBtn>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleSearchQuery}
        />
      </SearchForm>
    </Header>
  );
}
