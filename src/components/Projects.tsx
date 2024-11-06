import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'Real-time task management application with collaborative features',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot powered by machine learning algorithms',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    tags: ['Python', 'TensorFlow', 'Flask'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6 text-gray-900" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6 text-gray-900" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}