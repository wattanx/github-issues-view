import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://github-issues-view.vercel.app/');
  await page.click('data-testid=get-started');
  await page.waitForSelector('data-testid=issues-list');
  const list = page.locator('data-testid=issues-list');
  const count = await list.count();
  expect(count).toBe(10);
});
