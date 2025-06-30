
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import ProjectsPage from './pages/ProjectPage';

function App() {

  return (
     <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/projects" />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/tasks" element={<div>Tasks page (coming soon)</div>} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App
