'use client'
import { useEffect } from 'react'
import { ReactLenis } from 'lenis/react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Always open at the top: stop the browser from restoring the previous scroll position.
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    if (!window.location.hash) window.scrollTo(0, 0)
  }, [])

  return (
    <ReactLenis root options={{ lerp: 0.1, anchors: true }}>
      {children}
    </ReactLenis>
  )
}
