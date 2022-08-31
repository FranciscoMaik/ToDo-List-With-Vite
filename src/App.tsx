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
    const findToDo = toDos.find(item => item.id === idToDo);
    const toDosNoSelected = toDos.filter(items => items.id !== idToDo);
    if(findToDo){
      if (findToDo?.checked === true) {
        setToDos([...toDosNoSelected, {...findToDo, checked: false}]);
      }else {
        setToDos([...toDosNoSelected, {...findToDo, checked: true}]);
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
        />
      </div>
    </>
  )
}

export default App
