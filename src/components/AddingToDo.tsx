import { PlusCircle } from "phosphor-react";

import styles from "./AddingToDo.module.css"

function AddingToDo() {
  return(
    <form className={styles.contentForm}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
      />

      <button>
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  )
}

export default AddingToDo;