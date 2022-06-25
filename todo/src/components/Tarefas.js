import React from 'react';
import './Tarefas.css';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from "react-icons/fa";


function Tarefas({ListaTarefas , editaTarefa , removeTarefa}){
  return(
    <ul className="tarefas">
    {ListaTarefas.map((tarefa, index) => (
      <li key={tarefa}>
        {tarefa}
        <div className="botoesTarefas">
          <button>
            {" "}
            <FaEdit
              onClick={(e) => editaTarefa(e, index)}
              className="edit"
            />{" "}
          </button>
          <button>
            {" "}
            <FaWindowClose
              onClick={(e) => removeTarefa(e, index)}
              className="remove"
            />{" "}
          </button>
        </div>
      </li>
    ))}
  </ul>
  )
}


Tarefas.propTypes = {
  ListaTarefas: PropTypes.array.isRequired,
  editaTarefa: PropTypes.func.isRequired,
  removeTarefa: PropTypes.func.isRequired
}

export default Tarefas;