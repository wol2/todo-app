import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import Todoinsert from './components/Todoinsert';
import TodoList from './components/TodoList';

const App = () => {
  const [Todos, setTodos] = useState([
    { id: 1, text: '리엑트의 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링해 보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어 보기', checked: false },
    { id: 4, text: '일정 관리 앱 만들어 보기2', checked: false },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(Todos.concat(todo));
      nextId.current += 1;
    },
    [Todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(Todos.filter((todo) => todo.id !== id));
    },
    [Todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        Todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [Todos],
  );

  return (
    <TodoTemplate>
      <Todoinsert onInsert={onInsert} />
      <TodoList todos={Todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
