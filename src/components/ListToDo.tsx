import EmptyList from "./EmptyList";
import ToDo from "./ToDo";
import { ToDoProps } from "../App";

import styles from "./ListToDo.module.css"

interface ListToDoProps {
  todos: ToDoProps[];
  handleCheckedToDo: (idToDo: string) => void;
}

function ListToDo({ todos, handleCheckedToDo }: ListToDoProps) {
  const toDosSelected = todos.filter(item => item.checked).length;
  console.log("💻 ~ file: ListToDo.tsx ~ line 14 ~ ListToDo ~ toDosSelected", toDosSelected)

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
          />
        ))
      )}
    </div>
  )
}

export default ListToDo;