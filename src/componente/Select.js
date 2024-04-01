import React from 'react';

const Select = ({ onNumeroRegistrosChange }) => {
  const handleChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    onNumeroRegistrosChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor="select-registros">Número de Registros:</label>
      <select id="select-registros" onChange={handleChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default Select;
