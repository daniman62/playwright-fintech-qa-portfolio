import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import {
  users,
  invalidLoginScenarios
} from '../../fixtures/test-data';


test.describe('Authentication', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('AUTH-001 - Valid user can log in successfully', async ({ page }) => {
    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await expect(page).toHaveURL(/inventory/);
  });

for (const scenario of invalidLoginScenarios) {
  test(`${scenario.id} - ${scenario.name}`, async () => {
    await loginPage.login(
      scenario.username,
      scenario.password
    );

    await expect(loginPage.errorMessage)
      .toContainText(scenario.expectedError);
  });
}

  test('AUTH-005 - User can log out successfully', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.logout();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(loginPage.usernameInput).toBeVisible();
  });

});