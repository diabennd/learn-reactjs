import { useState, useEffect } from "react";

const BASE_URL = "https://dummyjson.com";

const Fetching = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await fetch(`${BASE_URL}/todos`);
        const getTodos = await data.json();
        
        setTodos(getTodos.todos);
        console.log(getTodos.todos);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {!isLoading ? (
        todos.map((todo) => {
          return (
            <li key={todo.id}>
              <p>{todo.todo}</p>
            </li>
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Fetching;
