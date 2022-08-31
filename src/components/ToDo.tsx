import { Trash } from "phosphor-react";

import styles from "./ToDo.module.css"

interface ToDoProps {
  id: string;
  todoItem: string;
  checked: boolean;
  handleCheckedToDo: (idToDo: string) => void;
  handleDeleteToDo: (idToDo: string) => void;
}

function ToDo({ id, todoItem, handleCheckedToDo, handleDeleteToDo }: ToDoProps) {
  function handleSelectedToDo() {
    handleCheckedToDo(id);
  }

  function handleDeleteToDoSelected() {
    handleDeleteToDo(id);
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <label htmlFor={id}> 
          <input 
            type="checkbox" 
            value={id} 
            id={id} 
            className={styles.radio}
            onChange={handleSelectedToDo}
          />
          <span className={styles.checkmark}/>
          <p>{todoItem}</p>
        </label>
      </div>

      <button name="delete" onClick={handleDeleteToDoSelected}>
        <Trash size={24}/>
      </button>
    </div>
  )
}

export default ToDo;