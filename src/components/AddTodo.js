import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Input, Alert, AlertIcon, CloseButton } from "@chakra-ui/react";
import { useState } from "react";
function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");
  const [showError, setShowError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.trim().length >= 5) {
      addTodo(todo);
      setShowError(false);
      setTodo("");
    } else {
      setShowError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          placeholder="add todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
      <HStack>
        {showError && (
          <Alert
            status="error"
            mt="4"
            fontSize="sm"
            borderRadius="base"
            py={1}
            px={2}
          >
            <AlertIcon />
            add 5 or more characters !!!
            <CloseButton onClick={() => setShowError(false)} />
          </Alert>
        )}
      </HStack>
    </form>
  );
}

export default AddTodo;
