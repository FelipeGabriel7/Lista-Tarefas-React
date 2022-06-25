import React, { Component } from "react";
import { FaPlus, FaEdit, FaWindowClose } from "react-icons/fa";
import "./Main.css";

class Main extends Component {
  state = {
    novaTarefa: "",
    ListaTarefas: [],
    index: -1,
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { ListaTarefas } = this.state;
    let { novaTarefa, index } = this.state;
    novaTarefa = novaTarefa.trim();

    if (ListaTarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...ListaTarefas];

    if (index === -1) {
      this.setState({
        ListaTarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        ListaTarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  removeTarefa = (e, index) => {
    console.log(" Delete ", index);
    const { ListaTarefas } = this.state;
    const novasTarefas = [...ListaTarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      ListaTarefas: [...novasTarefas],
    });
  };

  editaTarefa = (e, index) => {
    const { ListaTarefas } = this.state;
    this.setState({
      index,
      novaTarefa: ListaTarefas[index],
    });
  };

  criaTarefa = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  };
  render() {
    const { novaTarefa, ListaTarefas } = this.state;

    return (
      <div className="main">
        <h1> Lista de Tarefas </h1>
        <form className="form" onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.criaTarefa} value={novaTarefa} />
          <button type="submit">
            {" "}
            <FaPlus />
          </button>
        </form>
        <ul className="tarefas">
          {ListaTarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <div className="botoesTarefas">
                <button>
                  {" "}
                  <FaEdit
                    onClick={(e) => this.editaTarefa(e, index)}
                    className="edit"
                  />{" "}
                </button>
                <button>
                  {" "}
                  <FaWindowClose
                    onClick={(e) => this.removeTarefa(e, index)}
                    className="remove"
                  />{" "}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
