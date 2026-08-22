//Given a valid user exists
//When the user enters valid credentials and clicks Login
//Then the application should redirect to the inventory page

import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {

  test('AUTH-001 - Valid user can log in successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);
  });

//Given a valid user exists
//When the user enters invalid credentials and clicks Login
//Then the application should display error message

  test('AUTH-002 - Invalid password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('invalidpass_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username and password do not match');
  });

//Given a valid user exists
//When the user enters empty credentials and clicks Login
//Then the application should display error message

  test('AUTH-003 - Password is required', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Password is required');
  });

//Given a valid user is locked-out
//When the user enters valid credentials and clicks Login
//Then the application should display error message

  test('AUTH-004 - Locked-out user cannot log in', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Sorry, this user has been locked out');
  });

});