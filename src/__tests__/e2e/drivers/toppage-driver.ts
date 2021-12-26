import { expect, Locator, Page } from '@playwright/test';

export class TopPageDriver {
  readonly page: Page;
  readonly getStartedButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedButton = page.locator('data-testid=get-started');
  }

  public async gotoTopPage() {
    await this.page.goto('https://github-issues-view.vercel.app/');
  }

  public async clickGetStartedButton() {
    await this.getStartedButton.click();
  }
}
