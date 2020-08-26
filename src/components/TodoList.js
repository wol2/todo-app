import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoListItem.scss';

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
    </div>
  );
};

export default TodoList;
