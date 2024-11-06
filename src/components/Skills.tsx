import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Cpu, Palette, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="w-8 h-8" />,
    skills: [
      { name: 'React/Next.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Redux/Context', level: 'Advanced' }
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Backend Development',
    icon: <Database className="w-8 h-8" />,
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'RESTful APIs', level: 'Expert' },
      { name: 'GraphQL', level: 'Intermediate' }
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    title: 'DevOps & Tools',
    icon: <Terminal className="w-8 h-8" />,
    skills: [
      { name: 'Docker', level: 'Advanced' },
      { name: 'Git/GitHub', level: 'Expert' },
      { name: 'CI/CD', level: 'Intermediate' },
      { name: 'AWS', level: 'Intermediate' }
    ],
    color: 'from-purple-400 to-purple-600'
  }
];

const levelColors = {
  Beginner: 'border-gray-300 bg-gray-50',
  Intermediate: 'border-blue-300 bg-blue-50',
  Advanced: 'border-blue-400 bg-blue-50',
  Expert: 'border-blue-500 bg-blue-50'
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-4"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-center mb-16 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills and proficiency levels
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`p-6 bg-gradient-to-r ${category.color} text-white`}>
                  <div className="flex items-center space-x-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className={`p-3 rounded-lg border-2 ${levelColors[skill.level]} transition-all duration-300`}
                      >
                        <div className="text-sm font-medium text-gray-800">{skill.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{skill.level}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-6">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'MongoDB', 'PostgreSQL', 'Redis', 'Jest', 'Webpack', 'Firebase',
                'Material-UI', 'Sass', 'WebSockets', 'OAuth', 'JWT', 'Linux'
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white shadow-md rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}