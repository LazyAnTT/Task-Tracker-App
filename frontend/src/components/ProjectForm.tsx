import { useState } from "react";

export default function ProjectForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:8000/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setName("");
    onSuccess();
  };

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="New project name"
        className="border p-2 rounded flex-1"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded">
        Create
      </button>
    </form>
  );
}
