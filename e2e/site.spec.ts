import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('hero renders', async ({ page }) => {
  const hero = page.getByTestId('hero')
  await expect(hero).toBeVisible()
  await expect(hero.getByRole('heading', { level: 1 })).toContainText('Forma by Angelina')
})

test('all four service cards render', async ({ page }) => {
  const cards = page.locator('[data-testid^="service-card-"]')
  await expect(cards).toHaveCount(4)
})

test('booking embed mounts', async ({ page }) => {
  const embed = page.getByTestId('booking-embed')
  await embed.scrollIntoViewIfNeeded()
  await expect(embed).toBeVisible()
  // Cal.com injects an <iframe> into the embed container once mounted.
  await expect(embed.locator('iframe')).toHaveCount(1, { timeout: 15_000 })
})
