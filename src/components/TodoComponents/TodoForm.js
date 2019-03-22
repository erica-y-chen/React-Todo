import React from "react";
import "./Todo.css";
import Task from "./Task";
import Form from "./Form";

class TodoForm extends React.Component {
  render() {
    return (
      <div className="todo">
        <div className="list">
          {this.props.todo.map((taskfromMap, index) => (
            <Task
              key={index}
              item={taskfromMap}
              completed={taskfromMap}
              completedTaskFunction={this.props.CompletedTask}
              deleteCompleted={this.props.deleteCompleted}
            />
          ))}
        </div>

        <Form
          task={this.props.task}
          completed={this.props.completed}
          updateList={this.props.updateList}
          handleChanges={this.props.handleChanges}
          deleteCompleted={this.props.deleteCompleted}
        />
      </div>
    );
  }
}

export default TodoForm;
