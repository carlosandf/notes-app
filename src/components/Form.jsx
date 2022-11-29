import React from 'react';

const Form = ({ handleChange, handleSubmit, newNote }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newNote} onChange={handleChange} />
      <button>Crear nota</button>
    </form>
  );
}

export default Form;