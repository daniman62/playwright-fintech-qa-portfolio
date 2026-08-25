import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { users, checkoutData } from '../../fixtures/test-data';

test.describe('Checkout', () => {
  test('E2E-001 - Complete a purchase successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.addBikeLightToCart();

    await expect(inventoryPage.shoppingCartBadge)
      .toHaveText('1');

    await inventoryPage.openCart();

    await expect(cartPage.bikeLightItem)
      .toHaveText(checkoutData.product.name);

    await cartPage.checkout();

    await checkoutPage.enterCustomerInformation(
      checkoutData.customer.firstName,
      checkoutData.customer.lastName,
      checkoutData.customer.postalCode
    );

    await checkoutPage.continueCheckout();

    await expect(checkoutPage.bikeLightItem)
      .toHaveText(checkoutData.product.name);

    await checkoutPage.finishOrder();

    await expect(checkoutPage.confirmationMessage)
      .toHaveText('Thank you for your order!');
  });
});