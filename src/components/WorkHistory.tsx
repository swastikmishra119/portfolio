"use client";

import { useState } from 'react'
import { motion } from 'motion/react'
import { GraduationCap, Briefcase, Building, Users } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import GradientText from './ui/GradientText';
import GlareHover from './ui/GlareHover';

const WorkHistory = () => {
  const [animateCards, setAnimateCards] = useState(false);
  
  const experiences = [
    {
      id: 1,
      type: "education",
      title: "UPES",
      subtitle: "BACHELORS OF TECHNOLOGY",
      description: "Computer Science",
      dateRange: "2018 - 2022",
      icon: <GraduationCap className="h-6 w-6 text-purple-400" />,
      logoPath: "./img/UPES Logo.png",
      textPath: "./img/UPES Text.png",
      hasLogo: true,
      hasText: true
    },
    {
      id: 2,
      type: "internship",
      title: "To The New",
      subtitle: "INTERNSHIP", 
      description: "Backend / DevOps",
      dateRange: "06/2021 - 08/2021",
      icon: <Briefcase className="h-6 w-6 text-blue-400" />,
      logoPath: "./img/To The New Logo.png",
      textPath: "./img/To The New Text.png",
      hasLogo: true,
      hasText: true
    },
    {
      id: 3,
      type: "job",
      title: "Samsung",
      subtitle: "SOFTWARE ENGINEER",
      description: "Core OS / Android Frameworks",
      dateRange: "06/2022 - 04/2025",
      icon: <Building className="h-6 w-6 text-green-400" />,
      textPath: "./img/Samsung.png",
      hasLogo: false,
      hasText: true
    },
    {
      id: 4,
      type: "job", 
      title: "Microsoft",
      subtitle: "SOFTWARE ENGINEER",
      description: "FullStack",
      dateRange: "05/2025 - current",
      icon: <Users className="h-6 w-6 text-orange-400" />,
      logoPath: "./img/Microsoft Logo.png",
      textPath: "./img/Microsoft Text.png",
      hasLogo: true,
      hasText: true
    }
  ];

  return (
    <section id="work-history" className="min-h-screen bg-dark-bg transition-colors duration-300 py-20 relative" style={{scrollMarginTop: '4rem'}}>
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-6"
            initial={{ opacity: 0, y: 60, scale: 0.6, rotateX: -45 }}
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
              Experience
            </GradientText>
          </motion.h2>
          <motion.p 
            className="text-sm text-gray-400 max-w-3xl mx-auto uppercase font-bold tracking-wide transition-colors duration-300"
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
            The positions I have worked in my career so far
          </motion.p>
        </div>

        {/* Ladder Layout */}
        <motion.div 
          className="relative w-full max-w-none mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          onViewportEnter={() => {
            // Trigger all card animations when section comes into view
            setTimeout(() => setAnimateCards(true), 800);
          }}
        >
          {/* Timeline line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 opacity-40"
            style={{
              top: '0',
              bottom: '0',
              zIndex: 0,
              background: 'linear-gradient(to bottom, transparent 0%, transparent 7%, #a855f7 17%, #3b82f6 45%, #10b981 70%, #f59e0b 83%, transparent 93%, transparent 100%)'
            }}
          />
          
          <div className="space-y-12">
            {experiences.slice().reverse().map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative flex items-center"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={animateCards ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.25, 0.46, 0.45, 0.94], 
                  delay: index * 0.4
                }}
              >
                {/* Experience Card positioned completely left or right */}
                {index % 2 === 0 ? (
                  <div className="flex justify-end pr-8 w-1/2">
                    <div className="w-full max-w-md">
                      <ExperienceCard experience={experience} />
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start pl-8 w-1/2 ml-auto">
                    <div className="w-full max-w-md">
                      <ExperienceCard experience={experience} />
                    </div>
                  </div>
                )}
                
                {/* Timeline Dot at center */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-dark-bg shadow-lg z-10 transition-colors duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: {
    id: number;
    type: string;
    title: string;
    subtitle: string;
    description: string;
    dateRange: string;
    icon: React.ReactNode;
    logoPath?: string;
    textPath?: string;
    hasLogo: boolean;
    hasText: boolean;
  };
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <motion.div 
      className="relative w-full h-[180px]"
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
        <div className="relative h-full rounded-2xl border-2 border-dark-border p-2 md:rounded-3xl md:p-3 transition-colors duration-300 w-full">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={60}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-5 backdrop-blur-sm bg-dark-surface/50 transition-colors duration-300">
            <div className="relative flex flex-1 gap-6">
              {/* Logo column - left side */}
              <div className="flex-1 flex items-center justify-center">
                {(experience.hasLogo || experience.hasText) && (
                  <div className="flex items-center gap-2 h-12 md:h-14">
                    {experience.hasLogo && experience.logoPath && (
                      <img 
                        src={experience.logoPath} 
                        alt={`${experience.title} Logo`}
                        className={`object-contain transition-all duration-300 ${
                          experience.title === "To The New" 
                            ? "w-10 h-10 md:w-12 md:h-12" 
                            : "w-8 h-8"
                        }`}
                      />
                    )}
                    {experience.hasText && experience.textPath && (
                      <img 
                        src={experience.textPath} 
                        alt={`${experience.title} Text`}
                        className={`object-contain transition-all duration-300 ${
                          experience.title === "To The New" 
                            ? "h-10 md:h-12" 
                            : experience.title === "Samsung"
                            ? "h-5 md:h-6"
                            : "h-8"
                        }`}
                        style={{
                          filter: experience.title === "UPES" 
                            ? 'invert(1) brightness(2) contrast(2)'
                            : 'var(--logo-filter, none)'
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
              
              {/* Content column - right side */}
              <div className="flex-1 flex flex-col justify-center space-y-2">
                <h4 className="font-sans text-sm font-bold text-secondary-400 md:text-base leading-tight">
                  {experience.subtitle}
                </h4>
                <p className="font-sans text-xs text-dark-text-secondary md:text-sm leading-relaxed transition-colors duration-300">
                  {experience.description}
                </p>
                <div className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-md text-xs font-medium w-fit">
                  {experience.dateRange}
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlareHover>
    </motion.div>
  );
};

export default WorkHistory;
