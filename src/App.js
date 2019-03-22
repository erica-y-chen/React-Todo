import React from "react";
import "./App.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import KeyList from "./components/TodoComponents/KeyList";

const todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
    type: "Home"
  },

  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
    type: "Work"
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo,
      task: "",
      completed: false,
      type: "",
      types: ["Work", "Home", "Chores", "All"]
    };
  }
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateList = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.task,
      completed: false,
      id: Math.random()
    };

    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  deleteCompleted = item => {
    item.preventDefault();
    const newList = this.state.todo.slice();
    console.log(newList);

    const filtered = newList.filter(item => item.completed === false);
    console.log(filtered);

    this.setState({
      todo: filtered,
      newList: ""
    });
  };

  CompletedTask = id => {
    console.log(id);
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  handleType = type => {
    this.setState({ selectedType: type });
  };

  render() {
    //  filters the todo on the state to determine which type to show
    let filteredList = this.state.todo.filter(
      eachTodo => eachTodo.type === this.state.selectedType
    );
    // defaults to show all if no type is selected and show all if 'All' is selected
    if (!this.state.selectedType || this.state.selectedType === "All") {
      filteredList = this.state.todo;
    }

    return (
      <div class="body">
        <div class="menu">
          <h1>My tasks</h1>
          <KeyList
            todo={filteredList}
            handleType={this.handleType}
            types={this.state.types}
          />
        </div>
        <div class="content">
          <TodoForm
            todo={filteredList}
            task={this.state.task}
            completed={this.state.completed}
            CompletedTask={this.CompletedTask}
            deleteCompleted={this.deleteCompleted}
            handleChanges={this.handleChanges}
            updateList={this.updateList}
          />
        </div>
      </div>
    );
  }
}

export default App;
