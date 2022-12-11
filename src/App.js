import './App.css';
import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const onChangeHandler = (e) => {
    setNewTask(e.target.value)
  }

  let obj = {
    id: todoList.length,
    taskName: newTask,
    completed: false,
  }

  const onClickHandler = () => {
    setTodoList([...todoList, obj])
  }

  const deletTodo = (id) => {
    setTodoList(todoList.filter((x) => x.id !== id))
  }

  const completeHandler = (compltd) => {
    setTodoList(
        todoList.map((task) => {
          if (task.id === compltd) {
            return { ...obj, completed: true }
          }else{
            return task
          }
        })
      )
  }

  // console.log(obj);
  console.log(todoList.id);
  console.log("the", obj.id)
  return (
    <>
      <div>
        <input onChange={onChangeHandler}></input>
        <button onClick={onClickHandler}>Add Task</button>
      </div>
      <div>
        {todoList.map((task) => {
          return (
            <div>
              <h1 style={{ color: task.completed ? 'green' : 'black' }}>{task.taskName}</h1>
              <button onClick={() => completeHandler(task.id)}>Complete</button>
              <button onClick={() => deletTodo(task.id)}>x</button>
            </div>);
        })}
      </div>
    </>
  );
}

export default App;
