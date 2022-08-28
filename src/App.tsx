import Header from "./components/Header"
import AddingToDo from "./components/AddingToDo"
import ListToDo from "./components/ListToDo"

import "./global.css"
import styles from "./App.module.css"

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <AddingToDo />
        <ListToDo />
      </div>
    </>
  )
}

export default App
