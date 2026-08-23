import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { users } from '../../fixtures/test-data';


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

  test('AUTH-002 - Invalid password', async ({ page }) => {
    await loginPage.login(
      users.invalidPassword.username,
      users.invalidPassword.password
    );

    await expect(loginPage.errorMessage)
      .toContainText('Username and password do not match');
  });

  test('AUTH-003 - Password is required', async ({ page }) => {
  await loginPage.login(users.missingPassword.username);

  await expect(loginPage.errorMessage)
    .toContainText('Password is required');
});

  test('AUTH-004 - Locked-out user cannot log in', async ({ page }) => {
    await loginPage.login(
      users.locked.username,
      users.locked.password
    );

    await expect(loginPage.errorMessage)
      .toContainText('Sorry, this user has been locked out');
  });

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