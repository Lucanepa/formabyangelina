import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import de from './de.json'
import en from './en.json'

/**
 * Minimal, dependency-free i18n. German is primary, English secondary.
 * Add a string by adding the same key to `de.json` and `en.json` — `t()`
 * resolves dot-paths (e.g. `t('services.yoga.title')`) and supports simple
 * `{name}` interpolation.
 */
export const LANGUAGES = ['de', 'en'] as const
export type Language = (typeof LANGUAGES)[number]
export const DEFAULT_LANGUAGE: Language = 'de'

const dictionaries: Record<Language, unknown> = { de, en }
const STORAGE_KEY = 'forma.lang'

type Vars = Record<string, string | number>

interface I18nContextValue {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  t: (key: string, vars?: Vars) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

function resolve(dict: unknown, key: string): string | undefined {
  const value = key
    .split('.')
    .reduce<unknown>((acc, part) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[part] : undefined), dict)
  return typeof value === 'string' ? value : undefined
}

function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template
  return template.replace(/\{(\w+)\}/g, (match, name) =>
    name in vars ? String(vars[name]) : match,
  )
}

function readStoredLang(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return LANGUAGES.includes(stored as Language) ? (stored as Language) : DEFAULT_LANGUAGE
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Language) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((l) => (l === 'de' ? 'en' : 'de')),
    [],
  )

  const t = useCallback(
    (key: string, vars?: Vars) => {
      const hit = resolve(dictionaries[lang], key) ?? resolve(dictionaries[DEFAULT_LANGUAGE], key)
      return hit === undefined ? key : interpolate(hit, vars)
    },
    [lang],
  )

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>')
  return ctx
}

/** Shorthand for components that only need the translate function. */
export function useT() {
  return useI18n().t
}
