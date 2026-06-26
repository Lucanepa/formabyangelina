import { describe, expect, it } from 'vitest'
import { formatDate, formatTime } from './utils'

describe('Swiss formatting (de-CH)', () => {
  // Local-time components so the assertion is timezone-stable.
  const sample = new Date(2026, 5, 26, 9, 5) // 26 June 2026, 09:05

  it('formats dates as dd.mm.yyyy', () => {
    expect(formatDate(sample)).toBe('26.06.2026')
  })

  it('formats times as 24h HH:MM', () => {
    expect(formatTime(sample)).toBe('09:05')
  })

  it('uses 24h clock for afternoon times', () => {
    expect(formatTime(new Date(2026, 0, 1, 18, 30))).toBe('18:30')
  })

  it('accepts timestamps and ISO strings', () => {
    expect(formatDate(sample.getTime())).toBe('26.06.2026')
    expect(formatDate('2026-06-26T09:05:00')).toBe('26.06.2026')
  })
})
