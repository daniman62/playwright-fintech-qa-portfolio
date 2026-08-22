import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Authentication', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

//Given a valid user exists
//When the user enters valid credentials and clicks Login
//Then the application should redirect to the inventory page

  test('AUTH-001 - Valid user can log in successfully', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
  });

//Given a valid user exists
//When the user enters invalid credentials and clicks Login
//Then the application should display error message

  test('AUTH-002 - Invalid password', async ({ page }) => {
    await loginPage.login('standard_user', 'invalidpass_sauce');

    await expect(loginPage.errorMessage)
      .toContainText('Username and password do not match');
  });

//Given a valid user exists
//When the user enters empty credentials and clicks Login
//Then the application should display error message

  test('AUTH-003 - Password is required', async ({ page }) => {
    await loginPage.login('standard_user');

    await expect(loginPage.errorMessage)
      .toContainText('Password is required');
  });

//Given a valid user is locked-out
//When the user enters valid credentials and clicks Login
//Then the application should display error message

  test('AUTH-004 - Locked-out user cannot log in', async ({ page }) => {
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage)
      .toContainText('Sorry, this user has been locked out');
  });

});