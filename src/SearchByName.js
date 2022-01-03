import React, { useState } from 'react';

const SearchByName = ({ setSearchName }) => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length > 1) {
      setSearchName(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleInputChange} />
    </form>
  );
};

export default SearchByName;
