import React from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Input,
  Button,
} from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useState } from "react";

function TodoList({ todos, deleteTodo, editTodo, submitUpdateTodo }) {
  const [todoText, setTodoText] = useState("");
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p={4}
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) =>
        !todo.update ? (
          <HStack key={todo.id}>
            <Text>{todo.body}</Text>
            <Spacer />
            <IconButton
              icon={<FaTrash />}
              isRound="true"
              onClick={() => deleteTodo(todo.id)}
            />
            <IconButton
              icon={<FaEdit />}
              isRound="true"
              onClick={() => {
                editTodo(todo.id);
                setTodoText(todo.body);
              }}
            />
          </HStack>
        ) : (
          <HStack key={todo.id}>
            <Input
              onChange={(e) => setTodoText(e.target.value)}
              value={todoText}
            />
            <Button
              onClick={() => submitUpdateTodo(todo.id, todoText)}
              colorScheme="pink"
            >
              update
            </Button>
          </HStack>
        )
      )}
      {!todos.length && (
        <div>
          {" "}
          <Text colorScheme="red">Wow! no work pending.</Text>
        </div>
      )}
    </VStack>
  );
}

export default TodoList;
