import { test, expect } from '@playwright/test';

test('AUTH-001 - Valid user can log in successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);
});

//Given a valid user exists
//When the user enters valid credentials and clicks Login
//Then the application should redirect to the inventory page