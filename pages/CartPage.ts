import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly bikeLightItem: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.bikeLightItem = page.locator(
      '[data-test="inventory-item-name"]',
      { hasText: 'Sauce Labs Bike Light' }
    );

    this.checkoutButton = page.locator(
      '[data-test="checkout"]'
    );
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}