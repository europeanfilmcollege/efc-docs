import { expect, test } from '@playwright/test';

test('visit page and take screenshot', async ({ page }) => {
  // If available, we set the target URL to a preview deployment URL provided by the ENVIRONMENT_URL created by Vercel.
  // Otherwise, we use the Production URL.
  const targetUrl = process.env.ENVIRONMENT_URL || 'https://efc-docs.vercel.app'

  // We visit the page. This waits for the "load" event by default.
  const response = await page.goto(targetUrl)

  // Test that the response did not fail
  expect(response.status()).toBeLessThan(400)

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.jpg' })
})


test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'About this documentation' })).toBeVisible();
});
