import { useState } from "react"

import Header from "./components/Header"
import AddingToDo from "./components/AddingToDo"
import ListToDo from "./components/ListToDo"

import "./global.css"
import styles from "./App.module.css"

export interface ToDoProps {
  id: string;
  todo: string;
  checked: boolean;
}

function App() {
  const [toDos, setToDos] = useState<ToDoProps[]>([]);
  const [countItemsSelected, setCountItemsSelected] = useState(0);

  function handleSetNewToDoInList(newToDo: string) {
    const newItemListToDo = {
      id: (toDos.length + 1).toString() + newToDo,
      todo: newToDo,
      checked: false
    };

    setToDos([...toDos, newItemListToDo]);
  }

  function handleCheckedToDo(idToDo: string) {
    const findToDo = toDos.findIndex(item => item.id === idToDo);
    if(findToDo !== -1){
      if (toDos[findToDo].checked === true) {
        toDos[findToDo].checked = false;
        setCountItemsSelected(prev => prev - 1);
      }else {
        toDos[findToDo].checked = true;
        setCountItemsSelected(prev => prev + 1);
      }
    }
  }

  function handleDeleteToDo(idToDo: string) {
    const toDosNoDeleted = toDos.filter(items => items.id !== idToDo);
    setToDos(toDosNoDeleted);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <AddingToDo handleSetNewToDoInList={handleSetNewToDoInList}/>
        <ListToDo 
          todos={toDos} 
          handleCheckedToDo={handleCheckedToDo}
          handleDeleteToDo={handleDeleteToDo}
          itemsSelected={countItemsSelected}
        />
      </div>
    </>
  )
}

export default App
