import React, { useState } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

// Styles
import styles from './App.module.css';

// Interfaces
import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  // Remove tarefa da lista
  const deleteTask = (id: number): void => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  // Mostra ou esconde o modal
  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
      setTaskToUpdate(null); 
    }
  }

  // Editar tarefa (abre modal)
  const editTask = (task: ITask): void => {
    setTaskToUpdate(task);
    hideOrShowModal(true);
  };

  // Atualizar tarefa existente
  const updateTask = (id: number, title: string, difficulty: number): void => {
    const updatedTask: ITask = { id, title, difficulty };
    const updatedList = taskList.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    setTaskList(updatedList);
    hideOrShowModal(false);
  };

  return (
    <div className={styles.appContainer}>
      {/* Modal para editar tarefa */}
      <Modal>
        <TaskForm
          btnText="Editar Tarefa"
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
        />
      </Modal>

      <Header />

      <main className={styles.main}>
        <section className={styles.formSection}>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </section>

        <section className={styles.tasksSection}>
          <h2>Suas Tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
