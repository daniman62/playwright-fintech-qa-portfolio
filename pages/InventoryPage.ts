import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;
  readonly bikeLightAddToCartButton: Locator;
  readonly shoppingCartLink: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    this.page = page;

    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');

    this.bikeLightAddToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]'
    );

    this.shoppingCartLink = page.locator(
      '[data-test="shopping-cart-link"]'
    );

    this.shoppingCartBadge = page.locator(
      '[data-test="shopping-cart-badge"]'
    );
  }

  async addBikeLightToCart() {
    await this.bikeLightAddToCartButton.click();
  }

  async openCart() {
    await this.shoppingCartLink.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}