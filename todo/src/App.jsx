import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      <Todo id={1}></Todo>
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState();
  useEffect(() => {
    axios
      .get(`http://sum-server.100xdevs.com/todo?id=${id}`)
      .then(function (response) {
        setTodo(response.data.todos);
      });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description} </h3>
    </div>
  );
}

export default App;
