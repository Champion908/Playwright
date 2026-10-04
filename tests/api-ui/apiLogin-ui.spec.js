import { test, expect } from '@playwright/test';

test('API-UI-01 - API authentication reused in UI', async ({ page }) => {

    // Open authenticated account page
    await page.goto('https://practicesoftwaretesting.com/account');

    // Verify authenticated UI
    await expect(
        page.locator("//h1[normalize-space()='My account']")
    ).toBeVisible();

    console.log('User successfully authenticated in UI using API token');
});