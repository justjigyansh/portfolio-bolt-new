import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Coffee } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code2 className="w-12 h-12 text-blue-500" />,
              title: "Developer",
              description: "Passionate about creating elegant solutions to complex problems through code."
            },
            {
              icon: <Brain className="w-12 h-12 text-purple-500" />,
              title: "Problem Solver",
              description: "Analytical thinker with a knack for finding innovative solutions."
            },
            {
              icon: <Coffee className="w-12 h-12 text-red-500" />,
              title: "Team Player",
              description: "Collaborative spirit with excellent communication skills."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
            With a keen eye for detail and a commitment to writing clean, efficient code, I strive to 
            create impactful digital solutions that make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
}