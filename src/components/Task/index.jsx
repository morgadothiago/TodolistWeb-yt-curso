import { ChevronLeftCircle, ChevronRightIcon, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";

export default function Task({ task, onTaskClick }) {
  return (
    <Card className="bg-slate-200 p-6 space-y-4 rounded-md shadow-md">
      {task.map((task) => (
        <ul key={task.id} className="flex gap-2">
          <Input
            value={task.title || task.completed}
            readOnly
            className={`flex p-2 rounded-md font-bold text-slate-200 bg-slate-400 ${
              task.completed
                ? "border-l-4 border-green-400 line-through decoration-green-500 text-green-500 bg-green-200"
                : "border-l-4 border-red-400  text-red-500 bg-red-200"
            }`}
          />

          <button className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md text-slate-200">
            <Trash2 />
          </button>
          <button
            className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md text-slate-200"
            onClick={() => onTaskClick(task.id)}
          >
            <ChevronRightIcon />
          </button>
        </ul>
      ))}
    </Card>
  );
}
