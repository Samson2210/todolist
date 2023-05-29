import AddTodos from "./Components/AddTodos";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import { useEffect,useState } from "react";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
    console.log(initTodo)
  }
  const onDelete = (title) => {
    console.log("I am ondelete of todo", title)
    setTodos(todos.filter((e) => {
      return e.title !== title;
    }))

  }

  const addTodo = (title) => {
    console.log("I am adding todo", title);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title
    }
    setTodos([...todos, myTodo])
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Header title="TODO LIST"/>
    <Todos todos={todos} onDelete={onDelete} addTodo={addTodo}/>
    </>
  );
}

export default App;
