import { test, expect } from '@playwright/test';

test.describe('基础功能测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('页面加载成功', async ({ page }) => {
    await expect(page).toHaveTitle(/微晖|医疗|医院/);
  });

  test('导航栏存在', async ({ page }) => {
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();
  });

  test('页脚存在', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('mobile menu should toggle on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(page.locator('.lg\\:hidden nav >> text=首页')).toBeVisible({ timeout: 5000 });
  });

  test('navigation active state should update on route change', async ({ page }) => {
    await page.goto('/');
    const homeNav = page.locator('nav >> text=首页');
    await expect(homeNav).toBeVisible();
    await page.click('nav >> text=产品');
    await expect(page).toHaveURL(/\/products/);
  });

  test('footer links should be present', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(page.locator('footer >> text=产品服务')).toBeVisible();
    await expect(page.locator('footer >> text=关于我们')).toBeVisible();
    await expect(page.locator('footer >> text=联系我们')).toBeVisible();
  });

  test('products page should load without errors', async ({ page }) => {
    await page.goto('/products');
    await page.waitForLoadState('networkidle');
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));
    expect(errors.length).toBe(0);
  });

  test('solutions page should load without errors', async ({ page }) => {
    await page.goto('/solutions');
    await page.waitForLoadState('networkidle');
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));
    expect(errors.length).toBe(0);
  });

  test('about page should load without errors', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));
    expect(errors.length).toBe(0);
  });
});
