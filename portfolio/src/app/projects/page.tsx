// src/app/projects/page.tsx
const ProjectsPage = () =>{
  const projects = [
    {
      name: 'Course Planner Recommendation System',
      description:
        'A web-based system for graduate students to plan courses while ensuring compliance with program requirements.',
      techStack: 'React, Node.js, MongoDB, AWS',
    },
    {
      name: 'Project Tracker System',
      description:
        'A role-based web application for managing projects and employees within organizations.',
      techStack: 'React, Node.js, MongoDB, Chart.js',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.name} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary">{project.name}</h3>
              <p className="text-gray-700 my-2">{project.description}</p>
              <p className="text-sm text-secondary">Tech Stack: {project.techStack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;