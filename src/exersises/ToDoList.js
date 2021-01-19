import React from "react";
const ToDoList = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [id, setId] = React.useState(0);
  const [toDo, setToDo] = React.useState([]);

  const handelChange = (value) => {
    setInputValue(value);
  };

  const handelSubmit = () => {
    setToDo((prevTodos) => {
      setId((prevId) => prevId + 1);

      return [
        ...prevTodos,
        {
          description: inputValue,
          id: id,
        },
      ];
    });
  };
  const handelDelete = (id) => {
    setToDo((prevTodos) => {
      let filteredToDos = prevTodos.filter((el) => el.id !== id);
      return filteredToDos;
    });
  };

  return (
    <>
      <input
        onChange={({ target: { value } }) => {
          handelChange(value);
        }}
      ></input>
      <button onClick={handelSubmit}>ADD</button>
      <ul>
        {toDo.map((el) => {
          return (
            <>
              <div></div>
              <li key={el.id}>{el.description}</li>
              <button onClick={() => handelDelete(el.id)}>delete</button>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default ToDoList;
