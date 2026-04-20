import { test, expect } from '@playwright/test';

test.describe('Homepage UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('hero section should display correctly', async ({ page }) => {
    const hero = page.locator('main > div').first();
    await expect(hero).toBeVisible();
  });

  test('header navigation should be visible', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
  });

  test('navigation links should have correct labels', async ({ page }) => {
    await expect(page.locator('nav >> text=首页')).toBeVisible();
    await expect(page.locator('nav >> text=产品')).toBeVisible();
    await expect(page.locator('nav >> text=解决方案')).toBeVisible();
    await expect(page.locator('nav >> text=关于我们')).toBeVisible();
  });

  test('footer should be visible', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('logo should be visible in header', async ({ page }) => {
    const logo = page.locator('header img');
    await expect(logo).toBeVisible();
  });

  test('phone contact should be visible', async ({ page }) => {
    const phoneLink = page.locator('a:has-text("18969041110")').first();
    await expect(phoneLink).toBeVisible();
  });
});
