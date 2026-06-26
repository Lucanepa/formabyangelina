import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Swiss locale formatting — the single source of truth for dates & times.
 * Always de-CH: dates as dd.mm.yyyy, times as 24h HH:MM. Never format dates
 * inline elsewhere; route everything through these two helpers.
 */
const SWISS_LOCALE = 'de-CH'

const dateFormatter = new Intl.DateTimeFormat(SWISS_LOCALE, {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

const timeFormatter = new Intl.DateTimeFormat(SWISS_LOCALE, {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

/** Format a date as Swiss `dd.mm.yyyy` (de-CH). */
export function formatDate(date: Date | number | string): string {
  return dateFormatter.format(toDate(date))
}

/** Format a time as Swiss 24h `HH:MM` (de-CH). */
export function formatTime(date: Date | number | string): string {
  return timeFormatter.format(toDate(date))
}

function toDate(value: Date | number | string): Date {
  return value instanceof Date ? value : new Date(value)
}
