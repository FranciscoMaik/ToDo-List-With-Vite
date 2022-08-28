import Clipboard from "../assets/clipboard.svg"

import styles from "./EmptyList.module.css"; 

function EmptyList() {
  return (
    <div className={styles.emptyPlace}>
      <img src={Clipboard} alt="" />

      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}

export default EmptyList;