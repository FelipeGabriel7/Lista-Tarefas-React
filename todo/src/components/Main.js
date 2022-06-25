import React, { Component } from "react";
import "./Main.css";
import  Form from './Form.js'
import Tarefas from "./Tarefas";

class Main extends Component {
  state = {
    novaTarefa: "",
    ListaTarefas: [],
    index: -1,
  };

  componentDidMount(){
    const ListaTarefas = JSON.parse(localStorage.getItem('ListaTarefas'))

    if(!ListaTarefas) return;

    this.setState(
      {ListaTarefas}
    );
  }


  componentDidUpdate(prevProps , prevState){
      const { ListaTarefas } = this.state;

      if( ListaTarefas === prevState.ListaTarefas) return;

      localStorage.setItem('Lista Tarefas', JSON.stringify(ListaTarefas));
  }

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
        <Form handleOnSubmit={this.handleOnSubmit}
              criaTarefa={this.criaTarefa}
              novaTarefa={novaTarefa}
          />
        <Tarefas ListaTarefas={ListaTarefas}
                  editaTarefa={this.editaTarefa}
                  removeTarefa={this.removeTarefa}
            />
      </div>
    );
  }
}

export default Main;
