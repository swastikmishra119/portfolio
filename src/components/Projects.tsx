import { motion } from 'motion/react';
import GradientText from './ui/GradientText';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/300',
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      image: '/api/placeholder/400/300',
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts',
      technologies: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js'],
      image: '/api/placeholder/400/300',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="h-screen bg-dark-bg transition-colors duration-300 relative" style={{scrollMarginTop: '4rem'}}>
      <div className="absolute flex items-start justify-center px-4 sm:px-6 lg:px-8" style={{top: '40%', left: '0', right: '0', transform: 'translateY(-50%)'}}>
        <div className="max-w-6xl w-full text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-black mb-6"
          initial={{ opacity: 0, y: 80, scale: 0.5, rotateX: -45 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{ 
            duration: 1.3, 
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <GradientText
            animationSpeed={15}
            showBorder={false}
            fontWeight={700}
          >
            Featured Projects
          </GradientText>
        </motion.h2>
        <motion.p 
          className="text-sm text-gray-500 max-w-3xl mx-auto uppercase font-bold tracking-wide mb-16 transition-colors duration-300"
          initial={{ opacity: 0, y: 40, rotateY: 90 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.25, 1, 0.5, 1], 
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          HERE ARE SOME OF MY RECENT PROJECTS THAT SHOWCASE MY SKILLS AND EXPERIENCE
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-dark-surface border border-dark-border rounded-2xl overflow-hidden hover:border-secondary-500 transition-all duration-300"
              initial={{ 
                opacity: 0, 
                y: 100, 
                rotateY: -30, 
                rotateX: 45, 
                scale: 0.6,
                z: -100
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateY: 0, 
                rotateX: 0, 
                scale: 1,
                z: 0
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1], 
                delay: 0.7 + (index * 0.2),
                type: "spring",
                stiffness: 60,
                damping: 12
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                boxShadow: "0 10px 25px -8px rgba(168, 85, 247, 0.3)",
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}


            >
              <motion.div 
                className="h-48 bg-dark-border flex items-center justify-center overflow-hidden relative"
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  transition: { duration: 0.4 }
                }}
              >
                <motion.span 
                  className="text-dark-text-secondary transition-colors duration-300 z-10 relative"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.1, 1],
                    y: [0, -2, 0],
                    transition: {
                      duration: 3 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  Project Image
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-green-500/30"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    opacity: [0.3, 0.6, 0.3],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                    transition: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }
                  }}
                />
              </motion.div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-xl font-semibold text-dark-text mb-3 transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    color: "#a855f7",
                    transition: { duration: 0.2 }
                  }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-dark-text-secondary mb-4 leading-relaxed transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-dark-border text-dark-text-secondary rounded-md text-sm border border-dark-border transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        delay: 0.6 + (index * 0.1) + (techIndex * 0.1),
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "#a855f7",
                        color: "#ffffff",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={project.github}
                    className="text-secondary-400 hover:text-secondary-300 font-medium text-sm transition-colors"
                    whileHover={{ 
                      scale: 1.1, 
                      x: 10,
                      color: "#60a5fa",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="text-secondary-400 hover:text-secondary-300 font-medium text-sm transition-colors"
                    whileHover={{ 
                      scale: 1.1, 
                      x: -10,
                      color: "#34d399",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
