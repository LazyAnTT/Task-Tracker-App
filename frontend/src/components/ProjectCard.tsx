import { useEffect, useState } from "react";
import type { Project } from "../types/ProjectTypes";


export default function ProjectCard({ project, onChange }: { project: Project, onChange: () => void }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(project.title);
  
  useEffect(() => {
  setTitle(project.title);
}, [project.title]);

  const update = async () => {
    await fetch(`http://localhost:8000/api/projects/${project.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setEditing(false);
    onChange();
  };

  const deleteProject = async () => {
    if (!confirm("Delete this project?")) return;
    await fetch(`http://localhost:8000/api/projects/${project.id}`, { method: "DELETE" });
    onChange();
  };

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition cursor-pointer space-y-2">
      {editing ? (
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border p-1 w-full rounded"
        />
      ) : (
        <h3 className="font-semibold truncate">{project.title}</h3>
      )}

      <div className="flex gap-2">
        {editing ? (
          <button onClick={update} className="text-sm text-green-600">Save</button>
        ) : (
          <button onClick={() => setEditing(true)} className="text-sm text-blue-600">Edit</button>
        )}
        <button onClick={deleteProject} className="text-sm text-red-600">Delete</button>
      </div>
    </div>
  );
}
