import { ChevronLeftCircle, ChevronRightIcon, Trash2 } from "lucide-react";
import React from "react";

export default function Task({ task }) {
  return (
    <div className="bg-slate-200 p-5 space-y-4 rounded-md">
      {task.map((task) => (
        <ul key={task.id} className="flex gap-2">
          <li
            className={`flex flex-1 bg-slate-400 p-2 text-slate-200 font-bold rounded-md ${
              task.completed ? "border-green-500 border-l-4" : ""
            }`}
          >
            {task.title}
          </li>

          <button className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md text-slate-200">
            <Trash2 />
          </button>
          <button className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md text-slate-200">
            <ChevronRightIcon />
          </button>
        </ul>
      ))}
    </div>
  );
}
