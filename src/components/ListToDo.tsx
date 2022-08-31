import EmptyList from "./EmptyList";
import ToDo from "./ToDo";
import { ToDoProps } from "../App";

import styles from "./ListToDo.module.css"
import { useEffect, useState } from "react";

interface ListToDoProps {
  todos: ToDoProps[];
  handleCheckedToDo: (idToDo: string) => void;
  handleDeleteToDo: (idToDo: string) => void;
}

function ListToDo({ todos, handleCheckedToDo, handleDeleteToDo }: ListToDoProps) {
  const [toDosSelected, setToDosSelected] = useState(0);

  useEffect(() => {
    const lengthToDosSelected = todos.filter(item => item.checked).length;
    setToDosSelected(lengthToDosSelected);
  },[todos])

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.tasks}>
          <strong>Tarefas criadas</strong>
          <span>{todos.length}</span>
        </div>

        <div className={styles.finished}>
          <strong>Concluídas</strong>
          <span>{`${toDosSelected} de ${todos.length}`}</span>
        </div>
      </header>

      {todos.length === 0 ? (
        <EmptyList /> 
      ) : (
        todos.map((todo) => (
          <ToDo 
            key={todo.id} 
            id={todo.id} 
            todoItem={todo.todo}
            checked={todo.checked}
            handleCheckedToDo={handleCheckedToDo}
            handleDeleteToDo={handleDeleteToDo}
          />
        ))
      )}
    </div>
  )
}

export default ListToDo;