import { Trash } from "phosphor-react";

import styles from "./ToDo.module.css"

function ToDo() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <input type="radio" />
        <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam corrupti.</label>
      </div>
      <button>
        <Trash size={14}/>
      </button>
    </div>
  )
}

export default ToDo;