// src/app/skills/page.tsx
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SkillsPage = () =>{
  const skills = [
    {
      category: 'Frontend Development',
      icon: <FaReact className="text-4xl text-primary" />,
      skills: ['React.js', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Backend Development',
      icon: <FaNodeJs className="text-4xl text-primary" />,
      skills: ['Node.js', 'Express.js', 'Java', 'Python'],
    },
    {
      category: 'Cloud & DevOps',
      icon: <FaAws className="text-4xl text-primary" />,
      skills: ['AWS', 'Docker', 'Jenkins', 'SonarQube'],
    },
    {
      category: 'Databases',
      icon: <FaDatabase className="text-4xl text-primary" />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle'],
    },
    {
      category: 'Tools & Testing',
      icon: <FaTools className="text-4xl text-primary" />,
      skills: ['Git', 'JIRA', 'Mocha', 'Jest'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
            key={skill.category}
            className="p-6 bg-gray-100 rounded-lg shadow-md text-center transition transform hover:scale-105"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {skill.icon}
              <h3 className="text-xl font-semibold my-4">{skill.category}</h3>
              <ul className="text-sm text-gray-700">
                {skill.skills.map((item) => (
                  <li key={item} className="my-1">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;