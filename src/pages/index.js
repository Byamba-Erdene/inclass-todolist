import { Button } from "@/components/Button";
import { Todo } from "@/components/Todo";
import { TodoEdit } from "@/components/TodoEdit";
import { TodoInput } from "@/components/TodoInput";
import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState([{ id: 1, task: "okay", status: false }]);
  const [inputValue, setInputValue] = useState("");
  const [editing, setEditing] = useState("");

  function handleSubmit() {
    let newId = Math.floor(Math.random() * 1000);
    let newTodo = [...todo, { id: newId, task: inputValue, status: false }];
    setTodo(newTodo);
    document.getElementById("todoInput").value = "";
  }
  function handleInput(event) {
    if (event.key === "Enter") {
      let newId = Math.floor(Math.random() * 1000);
      let newTodo = [...todo, { id: newId, task: inputValue, status: false }];
      setTodo(newTodo);
      event.target.value = "";
    }
  }
  function changeStatus(id, status) {
    let newTodo = [...todo];
    newTodo.filter((e) => e.id === id)[0].status = status;
    setTodo(newTodo);
  }
  function deleteTodo(id) {
    console.log(id);
    let newTodo = todo.filter((e) => e.id !== id);
    setTodo(newTodo);
  }
  function handleChange(id, event) {
    if (event.key === "Enter") {
      let newTodo = [...todo];
      newTodo.filter((e) => e.id === id)[0].task = inputValue;
      setTodo(newTodo);
      alert("Successfully changed!");
    }
  }

  function onChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <div className="box">
      <div className="header">
        <h1 className="headerText">My To Do List</h1>
        <div className="headerStatus">
          {todo.filter((e) => e.status === true).length} / {todo.length}
        </div>
      </div>
      <div
        style={{
          margin: "auto",
          fontSize: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {todo.map((e) => {
          if (e.id !== editing) {
            return (
              <Todo
                todo={e}
                changeStatus={changeStatus}
                remove={deleteTodo}
                handleChange={handleChange}
                handleEdit={setEditing}
              />
            );
          } else {
            return (
              <TodoEdit
                todo={e}
                changeStatus={changeStatus}
                handleChange={handleChange}
                handleEdit={setEditing}
                setInputValue={setInputValue}
              />
            );
          }
        })}
      </div>
      <TodoInput onChange={onChange} handle={handleInput} />
      <Button handle={handleSubmit} />
    </div>
  );
}
