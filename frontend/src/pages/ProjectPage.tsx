import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import type { Project } from "../types/ProjectTypes";

export default function ProjectsPage() {
const [projects, setProjects] = useState<Project[]>([]);
  const [refresh, setRefresh] = useState(false);

useEffect(() => {
  fetch("http://localhost:8000/api/projects")
    .then(res => res.json())
    .then(data => {
      setProjects(data);
    });
}, [refresh]);

  const triggerRefresh = () => setRefresh(prev => !prev);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Projects</h2>
      <ProjectForm onSuccess={triggerRefresh} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} onChange={triggerRefresh} />
        ))}
      </div>
    </div>
  );
}
