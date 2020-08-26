import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import Todoinsert from './components/Todoinsert';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <Todoinsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default App;
