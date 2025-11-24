import { useState, useEffect, useMemo, memo, lazy, Suspense } from 'react'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import Lenis from 'lenis'
import Header from './components/Header'
import Hero from './components/Hero'
import NoiseTexture from './components/NoiseTexture'
import BackToTop from './components/BackToTop'

const About = lazy(() => import('./components/About'))
const WorkHistory = lazy(() => import('./components/WorkHistory'))
const Skills = lazy(() => import('./components/Skills'))
const BeyondCode = lazy(() => import('./components/BeyondCode'))
const Contact = lazy(() => import('./components/Contact'))

const App = memo(function App() {
  const [showContent, setShowContent] = useState(false)
  const [showHeader, setShowHeader] = useState(false)

  // Memoize motion variants for better performance
  const motionVariants = useMemo(() => ({
    headerTransition: { duration: 0.8, ease: "easeOut" as const },
    contentTransition: { duration: 0.8, ease: "easeOut" as const },
    headerSlideTransition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }), []);

  // Removed recursive raf callback creation

  useEffect(() => {
    // Ensure page always starts from the top on load/reload
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
      syncTouch: true,
    })

    // Request Animation Frame loop for Lenis with time tracking
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    
    // Show content with background veil
    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 2800) // 2.8 seconds - exactly with background veil

    // Show header after 4 seconds (after both texts display and background fades)
    const headerTimer = setTimeout(() => {
      setShowHeader(true)
    }, 4000) // 4 seconds - after background veil completes

    return () => {
      clearTimeout(contentTimer)
      clearTimeout(headerTimer)
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      {/* Noise Texture Overlay */}
      <NoiseTexture />
      
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Fixed Header - Animated slide-in with persistent fixed positioning */}
      <motion.div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 9999,
          pointerEvents: 'auto'
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: showHeader ? 0 : -100, 
          opacity: showHeader ? 1 : 0 
        }}
        transition={motionVariants.headerSlideTransition}
      >
        <Header />
      </motion.div>
      
      {/* Main Content */}
      <div className="min-h-screen bg-dark-bg text-dark-text transition-colors duration-300">
        <main>
          <Hero />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={motionVariants.contentTransition}
          >
            <Suspense fallback={<div className="h-screen"></div>}>
              <About />
              <WorkHistory />
              <Skills />
              <BeyondCode />
              <Contact />
            </Suspense>
          </motion.div>
        </main>
      </div>
    </LazyMotion>
  )
});

App.displayName = 'App';

export default App;