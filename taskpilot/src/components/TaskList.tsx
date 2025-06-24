import React from 'react'
import { ITask } from '../interfaces/Task'

type Props = {
  taskList: ITask[]
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <p>{task.title}</p>
          </div>
        ))
      ) : (
        <p>Não há tarefas Cadastradas!</p>
      )}
    </>
  )
}

export default TaskList