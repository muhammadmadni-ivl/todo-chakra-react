import { Heading } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack, IconButton } from "@chakra-ui/react";
import { FaSun } from "react-icons/fa";
import { useState } from "react";
function App() {
  const initialTodos = [
    {
      id: 1,
      body: "get bread",
      update: false,
    },
    {
      id: 2,
      body: "get butter",
      update: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(todo) {
    setTodos([
      ...todos,
      { id: Math.random().toString(), body: todo, update: false },
    ]);
  }
  function editTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            update: true,
          };
        } else {
          if (todo.update) {
            todo.update = false;
          }
          return todo;
        }
      })
    );
  }
  function submitUpdateTodo(id, todoText) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { id: todo.id, body: todoText, update: false } : todo
      )
    );
  }
  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        submitUpdateTodo={submitUpdateTodo}
      />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
