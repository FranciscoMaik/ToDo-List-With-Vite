import { Trash } from "phosphor-react";

import styles from "./ToDo.module.css"

interface ToDoProps {
  id: string;
  todoItem: string;
  checked: boolean;
  handleCheckedToDo: (idToDo: string) => void;
}

function ToDo({ id, todoItem, handleCheckedToDo }: ToDoProps) {
  function handleSelectedToDo() {
    handleCheckedToDo(id);
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

      <button>
        <Trash size={24}/>
      </button>
    </div>
  )
}

export default ToDo;