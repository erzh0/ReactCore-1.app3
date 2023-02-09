import React, {Component} from "react";

import TaskFilter from "../tasks-filter";

import "./footer.css";

export default class Footer extends Component  {
  render() {
    
    const {numLeft, clearCompleted, filter, onFilterChange} = this.props;
    
    return (
      <footer className="footer">
        <span class="todo-count">{numLeft} item left</span>
        <TaskFilter 
          filter={filter}
          onFilterChange={(name) => onFilterChange(name)} />
        <button 
          class="clear-completed"
          onClick={clearCompleted} >Clear completed</button>
      </footer>
    );
  }
};