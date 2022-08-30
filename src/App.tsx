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

  function handleSetNewToDoInList(newToDo: string) {
    const newItemListToDo = {
      id: (toDos.length + 1).toString(),
      todo: newToDo,
      checked: false
    };

    setToDos([...toDos, newItemListToDo]);
  }

  function handleCheckedToDo(idToDo: string) {
    const findToDo = toDos.findIndex(item => item.id === idToDo);
    if (findToDo !== -1) {
      if(toDos[findToDo].checked === false){
        toDos[findToDo] = {...toDos[findToDo], checked: true}
      }else{
        toDos[findToDo] = {...toDos[findToDo], checked: false}
      }
    }
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <AddingToDo handleSetNewToDoInList={handleSetNewToDoInList}/>
        <ListToDo todos={toDos} handleCheckedToDo={handleCheckedToDo}/>
      </div>
    </>
  )
}

export default App
