import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { PlusCircle } from "phosphor-react";

import styles from "./AddingToDo.module.css"

interface AddingToDoProps {
  handleSetNewToDoInList: (newToDo: string) => void;
}

function AddingToDo({ handleSetNewToDoInList }: AddingToDoProps) {
  const [itemToDo, setItemToDo] = useState("");

  function handleSetNewToDo(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setItemToDo(event.target.value);
  }
    
  function handleAddingToDo(event: FormEvent) {
    event.preventDefault();
    handleSetNewToDoInList(itemToDo);
    setItemToDo("");
  }

  function handleNewItemInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Deve adicionar um item!");
  }

  return(
    <form className={styles.contentForm} onSubmit={handleAddingToDo}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        value={itemToDo}
        onChange={handleSetNewToDo}
        required
        onInvalid={handleNewItemInvalid}
      />

      <button type="submit">
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  )
}

export default AddingToDo;