import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './Todoinsert.scss';

const Todoinsert = ({ onInsert }) => {
  const [Value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(Value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, Value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={Value}
        onChange={onChange}
      />
      <button type="submit" onClick={onSubmit}>
        <MdAdd />
      </button>
    </form>
  );
};

export default Todoinsert;
