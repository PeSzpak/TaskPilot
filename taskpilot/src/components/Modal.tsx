import React from 'react'
import styles from './Modal.module.css'

type Props = {
  children: React.ReactNode
}

const Modal = ({ children }: Props) => {
  return (
    <div id="modal" className={`${styles.modalWrapper} hide`}>
      <div className={styles.fade} onClick={() => {
        const modal = document.querySelector("#modal");
        modal!.classList.add("hide");
      }} />
      <div className={styles.modal}>
        <h2>Editar Tarefa</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal