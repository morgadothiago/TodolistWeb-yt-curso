import React, { useState } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

export default function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Estudar React",
      completed: true,
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

  function onChangeStageTask() {
    console.log("Appagando o item de id:");
  }

  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center p-6">
      <div className="w-[500px] flex flex-col">
        <Header />
        {/* <AddTask /> */}
        <Task key={task.id} task={task} onClick={onChangeStageTask} />
      </div>
    </div>
  );
}
