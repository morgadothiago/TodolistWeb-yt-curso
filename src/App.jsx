import React, { useState, useEffect, useRef } from "react";
import { RiTodoFill } from "react-icons/ri";

export default function App() {
  const [message, setMessage] = useState();

  useEffect(() => {
    if (!message) {
      alert("Messagem Apagada com sucesso!!");
    }
  }, [message]);

  const handleNewMenssager = () => {
    const newMessage = "Ola Dev: Thiago Morgado";

    setMessage(newMessage);
  };

  const handleCleanMessager = () => {
    setMessage("");
  };

  return (
    <div className=" bg-slate-500 flex flex-1 w-screen h-screen flex-col items-center ">
      <div className=" w-full py-10">
        <h1 className=" p-10 text-center text-white font-bold uppercase  flex justify-center items-center gap-5">
          ToDoList
          <RiTodoFill size={24} />
        </h1>
      </div>

      <div className="flex flex-col">
        <h1>{message}</h1>
        <button onClick={handleNewMenssager}>Clicar aqui</button>
        <button onClick={handleCleanMessager}>Limpar menssage</button>
      </div>
    </div>
  );
}
