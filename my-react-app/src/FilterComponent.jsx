import React, { useState } from 'react';

function FilterComponent() {
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleFilter = () => {
    // Implement your filter logic here
    console.log('Search Text:', searchText);
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        style={{ marginRight: '10px' }}
      >
        <option value="all">All Categories</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default FilterComponent;