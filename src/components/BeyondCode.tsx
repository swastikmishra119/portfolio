import { motion } from 'motion/react'
import { useState } from 'react'
import GradientText from './ui/GradientText'
import GlareHover from './ui/GlareHover'
import { GlowingEffect } from './ui/glowing-effect'

const tracks = [
  {
    id: 1,
    title: 'NIRVARA',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2147707239&color=%23070808&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    trackUrl: 'https://soundcloud.com/swstkk/nirvra'
  },
  {
    id: 2,
    title: 'GENESIS',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1696189032&color=%23070808&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    trackUrl: 'https://soundcloud.com/swstkk/genesis-low'
  },
  {
    id: 3,
    title: 'Arrival (intro)',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2046731092&color=%23070808&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    trackUrl: 'https://soundcloud.com/swstkk/arrival-intro'
  }
]

const BeyondCode = () => {
  const [animateCards, setAnimateCards] = useState(false);

  return (
    <section 
      id="beyond-code" 
      className="min-h-screen bg-dark-bg transition-colors duration-300 relative"
      style={{scrollMarginTop: '4rem'}}
    >
      <div className="absolute flex items-start justify-center px-4 sm:px-6 lg:px-8" style={{top: '50%', left: '0', right: '0', transform: 'translateY(-50%)'}}>
        <div className="max-w-4xl w-full text-center">
        {/* Section Title */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-center overflow-visible"
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
            Beyond Code
          </GradientText>
        </motion.h2>

        {/* Subheading - Matching Skills format */}
        <motion.p 
          className="text-sm text-gray-500 max-w-3xl mx-auto uppercase font-bold tracking-wide mb-20 transition-colors duration-300 text-center"
          initial={{ opacity: 0, y: 30, rotateY: 90, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.25, 1, 0.5, 1], 
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          WHEN I'M NOT CODING, I'M CREATING MUSIC. HERE ARE SOME OF MY TRACKS.
        </motion.p>

        {/* Music Tracks - Vertical centered layout */}
        <motion.div 
          className="space-y-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          onViewportEnter={() => {
            // Trigger all card animations when section comes into view
            setTimeout(() => setAnimateCards(true), 800);
          }}
        >
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={animateCards ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94], 
                delay: index * 0.4
              }}
            >
              <motion.div 
                className="relative w-full"
                whileHover={{ 
                  y: -6, 
                  scale: 1.02,
                  transition: { 
                    duration: 0.3, 
                    ease: "easeOut"
                  } 
                }}
              >
                <GlareHover
                  width="100%"
                  height="100%"
                  background="transparent"
                  borderRadius="1.5rem"
                  borderColor="transparent"
                  glareColor="#c4b5fd"
                  glareOpacity={0.2}
                  glareAngle={-30}
                  glareSize={275}
                  transitionDuration={1200}
                  playOnce={false}
                  className="w-full h-full"
                  style={{ border: 'none' }}
                >
                  <div className="relative rounded-2xl border-2 border-dark-border p-2 md:rounded-3xl md:p-3 transition-colors duration-300 w-full">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={60}
                      inactiveZone={0.01}
                    />
                    <div className="relative flex flex-col gap-4 overflow-hidden rounded-xl p-4 md:p-5 backdrop-blur-sm bg-dark-surface/50 transition-colors duration-300">
                      {/* SoundCloud Embed */}
                      <div className="w-full">
                        <iframe
                          width="100%"
                          height="120"
                          scrolling="no"
                          frameBorder="no"
                          allow="autoplay"
                          src={track.embedUrl}
                          title={track.title}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </GlareHover>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BeyondCode
