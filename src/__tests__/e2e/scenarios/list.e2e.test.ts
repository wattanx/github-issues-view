import { test, expect } from '@playwright/test';
import { TopPageDriver } from '../drivers/toppage-driver';

test('basic test', async ({ page }) => {
  const driver = new TopPageDriver(page);
  await driver.gotoTopPage();
  await driver.clickGetStartedButton();
  await page.waitForSelector('data-testid=issues-list');
  const list = page.locator('data-testid=issues-list');
  const count = await list.count();
  expect(count).toBe(10);
});
