import { useEffect, useState } from 'react'

function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none z-0 blur-[120px] opacity-20"
      style={{
        background:
          'radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(168,85,247,0) 70%)',
        transform: `translate(${position.x - 175}px, ${
          position.y - 175
        }px)`,
        transition: 'transform 0.08s linear',
      }}
    />
  )
}

export default CursorGlow