import { motion } from 'framer-motion';
import GradientText from './ui/GradientText';
import { GlowingEffect } from './ui/glowing-effect';
import { Tilt } from '../../components/motion-primitives/tilt';

const About = () => {
  return (
    <section id="about" className="h-screen bg-dark-bg transition-colors duration-300 relative" style={{scrollMarginTop: '4rem'}}>
      <div className="absolute flex items-start justify-center px-4 sm:px-6 lg:px-8" style={{top: '40%', left: '0', right: '0', transform: 'translateY(-50%)'}}>
        <div className="max-w-6xl w-full text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-12"
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
            About Me
          </GradientText>
        </motion.h2>

        {/* Main Content Layout: Image on left, Content on right - Same height */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-8 mb-8">
            {/* Left Side - Image with Tilt Effect and Card Styling - 50% width */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94], 
                delay: 0.2
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Tilt rotationFactor={8} isRevese>
                <div className="relative w-full h-full rounded-2xl border-2 border-dark-border p-2 md:rounded-3xl md:p-3 transition-colors duration-300" style={{maxWidth: '349px'}}>
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={60}
                    inactiveZone={0.01}
                  />
                  <div className="relative h-full overflow-hidden rounded-xl backdrop-blur-sm bg-dark-surface/50 transition-colors duration-300 flex items-center justify-center">
                    <img 
                      src="img/me.jpg" 
                      alt="Swastik Mishra"
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Tilt>
            </motion.div>

            {/* Right Side - Content - 50% width */}
            <motion.div 
              className="w-full lg:w-1/2 text-left lg:text-left"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94], 
                delay: 0.4
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="space-y-6">
                <motion.p 
                  className="text-dark-text-secondary text-lg leading-relaxed transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94], 
                    delay: 0.6
                  }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  Hey, I'm Swastik, a software engineer who enjoys building systems that perform. 
                </motion.p>
                <motion.p 
                  className="text-dark-text-secondary text-lg leading-relaxed transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94], 
                    delay: 0.7
                  }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  At <em>Microsoft</em>, I work on AMC Portal used by millions! Before that I spent time at <em>Samsung</em> making Android devices faster and more reliable. I care about simplicity, performance, and writing code that lasts.
                </motion.p>
                <motion.p 
                  className="text-dark-text-secondary text-lg leading-relaxed transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94], 
                    delay: 0.8
                  }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  Along the way, I've filed <em>patents</em> in listener-aware audio encoding and VR locomotion controls, contributing to enhancing user experience to give people more.
                </motion.p>
                <motion.p 
                  className="text-dark-text-secondary text-lg leading-relaxed transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94], 
                    delay: 0.9
                  }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  Away from code, I'm big on exploring sound, stories, and spaces - from music and films to new places.
                  These experiences keep me curious and bring me fresh perspective back into my work.
                </motion.p>
              </div>
              
              {/* Social Links - Left aligned under content */}
              <motion.div 
                className="flex items-center justify-start gap-8 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94], 
                  delay: 1.0
                }}
                viewport={{ once: true, amount: 0.8 }}
              >
            <motion.a 
              href="mailto:swastikmishra.career@gmail.com" 
              className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              title="swastikmishra.career@gmail.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 1.1 }}
              viewport={{ once: true, amount: 0.8 }}
              whileHover={{ 
                scale: 1.1,
                y: -3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="https://icons.veryicon.com/png/o/brands/application-logo/gmail-45.png" 
                alt="Gmail"
                className="w-10 h-10"
              />
            </motion.a>
            
            <motion.a 
              href="https://in.linkedin.com/in/swastik-mishra-1128bb20a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-400 hover:text-secondary-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 1.15 }}
              viewport={{ once: true, amount: 0.8 }}
              whileHover={{ 
                scale: 1.1,
                y: -3,
                color: "#0077b5",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            
            <motion.a 
              href="https://leetcode.com/u/swaastikkk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              title="LeetCode Profile"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 1.2 }}
              viewport={{ once: true, amount: 0.8 }}
              whileHover={{ 
                scale: 1.1,
                y: -3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
              </svg>
            </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About
