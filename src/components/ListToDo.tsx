import EmptyList from "./EmptyList";
import ToDo from "./ToDo";

import styles from "./ListToDo.module.css"

const todos = [1,2,3,4,5];

function ListToDo() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.tasks}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.finished}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>

      {/* <EmptyList /> */}

      {todos.map((todo) => (
        <ToDo key={todo}/>
      ))}
      
    </div>
  )
}

export default ListToDo;