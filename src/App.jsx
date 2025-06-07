import React, { useState } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

export default function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Estudar React",
      completed: false,
    },
    {
      id: 2,
      title: "Fazer compras",
      completed: true,
    },
    {
      id: 3,
      title: "Ler um livro",
      completed: true,
    },
  ]);

  function onTaskClick(taskId) {
    // Percorre o array de tarefas
    const newTasks = task.map((task) => {
      // Verifica se o id da tarefa atual é igual ao id recebido
      if (task.id === taskId) {
        // Retorna a tarefa com o campo 'completed' invertido (true -> false, false -> true)
        return { ...task, completed: !task.completed };
      }

      // Retorna a tarefa sem alterações
      return task;
    });

    // Atualiza o estado com a nova lista de tarefas
    setTask(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center p-6">
      <div className="w-[500px] flex flex-col">
        <Header />
        {/* <AddTask /> */}
        <Task task={task} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}
