import { useCallback, useEffect, useState } from 'react'

/**
 * Dark mode via a `.dark` class on <html>. Persists the choice and falls back
 * to the OS preference on first visit. Colours flip automatically through the
 * Warm Clay CSS variables — no per-component dark styling needed.
 */
const STORAGE_KEY = 'forma.theme'

function getInitial(): boolean {
  if (typeof window === 'undefined') return false
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark') return true
  if (stored === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function useDarkMode() {
  const [dark, setDark] = useState<boolean>(getInitial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
  }, [dark])

  const toggle = useCallback(() => setDark((d) => !d), [])

  return { dark, toggle }
}
