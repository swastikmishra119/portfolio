import { motion } from 'framer-motion';
import { memo, useState, useCallback } from 'react';
import GradientText from './ui/GradientText';

const Contact = memo(() => {
  const [resumeLoaded, setResumeLoaded] = useState(false);

  const triggerConfetti = useCallback((e: React.MouseEvent<HTMLHeadingElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const duration = 2500;
    const startTime = performance.now();

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true // Better performance
    });
    if (!ctx) return;

    const colors = ['#a855f7', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'];
    
    // Create 50 confetti pieces
    const particles = Array.from({ length: 50 }, () => {
      const angle = randomInRange(0, Math.PI * 2);
      const velocity = randomInRange(8, 20);
      return {
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 5,
        rotation: randomInRange(0, Math.PI * 2),
        rotationSpeed: randomInRange(-0.3, 0.3),
        color: colors[Math.floor(Math.random() * colors.length)],
        size: randomInRange(6, 10)
      };
    });

    function animate() {
      if (!ctx || !canvas) return;
      
      const elapsed = performance.now() - startTime;
      
      if (elapsed > duration) {
        document.body.removeChild(canvas);
        return;
      }

      const progress = elapsed / duration;
      
      // Clear with low overhead
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Batch render all particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4; // gravity
        p.rotation += p.rotationSpeed;

        // Fade out in last 30%
        const opacity = progress > 0.7 ? (1 - progress) / 0.3 : 1;

        ctx.globalAlpha = opacity;
        ctx.fillStyle = p.color;
        
        // Use translate + rotate for smooth rendering
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="contact" className="min-h-screen bg-black transition-colors duration-300 relative flex flex-col overflow-hidden pb-12" style={{scrollMarginTop: '4rem'}}>
      {/* Background Image */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://cdn.prod.website-files.com/672e948e890dd8b9cc4d58dc/674132fbca99e012bda8855f_lkl9.webp)',
            backgroundPosition: 'center',
            backgroundSize: '125%',
            opacity: '0.85'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
      </div>
      
      <div className="relative z-20 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 cursor-pointer select-none"
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.19, 1.0, 0.22, 1.0]
          }}
          viewport={{ once: true, amount: 0.3 }}
          onClick={triggerConfetti}
          whileTap={{ scale: 0.98 }}
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
            duration: 0.9, 
            ease: [0.19, 1.0, 0.22, 1.0], 
            delay: 0.15
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Have something on your mind? Let's share thoughts, swap ideas, or simply start a conversation!
        </motion.p>



        {/* Terminal Component with Resume Viewer */}
        <motion.div 
          className="flex justify-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.19, 1.0, 0.22, 1.0], 
            delay: 0.3
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
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    {!resumeLoaded && (
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff', color: '#000' }}>
                        <p>Loading Resume...</p>
                      </div>
                    )}
                    <iframe
                      src="https://drive.google.com/file/d/1tFUZdyPnPkIFZuYqbenISny19xMuwP1T/preview"
                      width="100%"
                      height="100%"
                      className="border-0"
                      title="Swastik's Resume"
                      allow="autoplay"
                      loading="lazy"
                      onLoad={() => setResumeLoaded(true)}
                      style={{ opacity: resumeLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>        </div>
      </div>
      
      {/* Footer at bottom of Contact section */}
      <motion.div 
        className="relative z-30 text-center mt-8 pb-4"
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
  );
});

Contact.displayName = 'Contact';

export default Contact;
