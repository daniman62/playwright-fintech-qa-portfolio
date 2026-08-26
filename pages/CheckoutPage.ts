import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly bikeLightItem: Locator;
  readonly confirmationMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.locator(
      '[data-test="firstName"]'
    );

    this.lastNameInput = page.locator(
      '[data-test="lastName"]'
    );

    this.postalCodeInput = page.locator(
      '[data-test="postalCode"]'
    );

    this.continueButton = page.locator(
      '[data-test="continue"]'
    );

    this.finishButton = page.locator(
      '[data-test="finish"]'
    );

    this.bikeLightItem = page.locator(
      '[data-test="inventory-item-name"]',
      { hasText: 'Sauce Labs Bike Light ' }
    );

    this.confirmationMessage = page.locator(
      '[data-test="complete-header"]'
    );

    this.errorMessage = page.locator('[data-test="error"]');
  }

  async enterCustomerInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }
}