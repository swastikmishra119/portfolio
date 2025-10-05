import { motion } from 'motion/react'
import GradientText from './ui/GradientText';

const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-black transition-colors duration-300 relative flex flex-col overflow-hidden" style={{scrollMarginTop: '4rem'}}>
      {/* Split Background - Left Hand */}
      <div className="absolute inset-y-0 left-0 w-[45%] z-10 pointer-events-none">
        <div 
          className="absolute inset-0 bg-contain bg-left bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/img/contact-bg.jpg)',
            backgroundPosition: '0% center',
            backgroundSize: 'auto 100%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />
      </div>

      {/* Split Background - Right Hand */}
      <div className="absolute inset-y-0 right-0 w-[45%] z-10 pointer-events-none">
        <div 
          className="absolute inset-0 bg-contain bg-right bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/img/contact-bg.jpg)',
            backgroundPosition: '100% center',
            backgroundSize: 'auto 100%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />
      </div>
      
      <div className="relative z-20 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-6"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <GradientText
            animationSpeed={15}
            showBorder={false}
            fontWeight={700}
          >
            Let's Connect!
          </GradientText>
        </motion.h2>
        <motion.p 
          className="text-sm sm:text-base text-dark-text-secondary max-w-full mx-auto mt-6 sm:mt-8 mb-12 sm:mb-16 transition-colors duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.25, 0.46, 0.45, 0.94], 
            delay: 0.2
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Have something on your mind? Let's share thoughts, swap ideas, or simply start a conversation!
        </motion.p>



        {/* Terminal Component with Resume Viewer */}
        <motion.div 
          className="flex justify-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.9, 
            ease: [0.25, 0.46, 0.45, 0.94], 
            delay: 0.4
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <div className="bg-dark-bg border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex justify-between items-center border-b border-gray-700 p-2 sm:p-3 md:p-4">
                <motion.div 
                  className="flex flex-row gap-x-1 sm:gap-x-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div 
                    className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-yellow-500"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 1.0, type: "spring", stiffness: 300 }}
                    viewport={{ once: true, amount: 0.3 }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3
                      }
                    }}
                    whileHover={{ scale: 1.5, rotate: 180 }}
                  />
                  <motion.div 
                    className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 1.1, type: "spring", stiffness: 300 }}
                    viewport={{ once: true, amount: 0.3 }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6
                      }
                    }}
                    whileHover={{ scale: 1.5, rotate: 180 }}
                  />
                </motion.div>
                
                {/* Download Icon in Top Bar */}
                <motion.a
                  href="https://drive.google.com/file/d/1tFUZdyPnPkIFZuYqbenISny19xMuwP1T/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                  title="Download Resume"
                  initial={{ opacity: 0, rotate: -180, scale: 0 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: [0, -10, 10, 0],
                    color: "#60a5fa",
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9, rotate: 45 }}
                  animate={{
                    y: [0, -3, 0],
                    rotate: [0, 5, -5, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.a>
              </div>
              
              {/* Terminal Content */}
              <div className="p-2 sm:p-3 md:p-4">
                {/* Resume Viewer with Aspect Ratio */}
                <motion.div 
                  className="bg-white rounded overflow-hidden" 
                  style={{aspectRatio: '420 / 297'}}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.25, 0.46, 0.45, 0.94], 
                    delay: 0.6
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <iframe
                    src="https://drive.google.com/file/d/1tFUZdyPnPkIFZuYqbenISny19xMuwP1T/preview"
                    width="100%"
                    height="100%"
                    className="border-0"
                    title="Swastik's Resume"
                    allow="autoplay"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        </div>
      </div>
      
      {/* Footer at bottom of Contact section */}
      <motion.div 
        className="absolute bottom-4 left-0 right-0 z-30 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.46, 0.45, 0.94], 
          delay: 1.0
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p 
          className="text-sm text-gray-500 transition-colors duration-300 leading-tight"
          initial={{ opacity: 0, x: -30, rotateY: 90 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.2,
            type: "spring",
            stiffness: 150
          }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ 
            scale: 1.1,
            color: "#a855f7",
            transition: { duration: 0.2 }
          }}
        >
          Designed by Swastik
        </motion.p>
        <motion.p 
          className="text-sm text-gray-500 transition-colors duration-300"
          initial={{ opacity: 0, x: 30, rotateY: -90 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.4,
            type: "spring",
            stiffness: 150
          }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ 
            scale: 1.1,
            color: "#60a5fa",
            transition: { duration: 0.2 }
          }}
        >
          Built in React
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Contact
