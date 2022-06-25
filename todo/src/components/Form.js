import React from 'react';
import PropTypes from 'prop-types';
import {FaPlus} from 'react-icons/fa';
import './Form.css';


function Formulario({handleOnSubmit , criaTarefa , novaTarefa}){
  return(
    <form className="form" onSubmit={handleOnSubmit}>
  <input type="text" onChange={criaTarefa} value={novaTarefa} />
  <button type="submit">
    <FaPlus />
  </button>
</form>

  )

}

Formulario.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    criaTarefa: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}

export default Formulario;