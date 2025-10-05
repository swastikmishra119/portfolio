const NoiseTexture = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]" style={{ mixBlendMode: 'overlay', opacity: 0.03, willChange: 'opacity', contain: 'strict' }} aria-hidden="true">
      <svg className="w-full h-full" aria-hidden="true" style={{ transform: 'translateZ(0)' }}>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  )
}

export default NoiseTexture
