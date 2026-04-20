import { test, expect } from '@playwright/test';

test.describe('导航测试', () => {
  test.beforeEach(async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    page.on('pageerror', err => {
      errors.push(err.message);
    });
    await page.goto('/');
    await expect(page).not.toHaveURL(/error/);
  });

  test('首页路由', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/#\/|localhost:3266/);
  });

  test('产品中心路由', async ({ page }) => {
    await page.goto('/#/products');
    await expect(page).toHaveURL(/#\/products/);
  });

  test('解决方案路由', async ({ page }) => {
    await page.goto('/#/solutions');
    await expect(page).toHaveURL(/#\/solutions/);
  });

  test('关于我们路由', async ({ page }) => {
    await page.goto('/#/about');
    await expect(page).toHaveURL(/#\/about/);
  });

  test('should navigate to products page', async ({ page }) => {
    await page.click('nav >> text=产品');
    await expect(page).toHaveURL(/\/products/);
  });

  test('should navigate to solutions page', async ({ page }) => {
    await page.click('nav >> text=解决方案');
    await expect(page).toHaveURL(/\/solutions/);
  });

  test('should navigate to about page', async ({ page }) => {
    await page.click('nav >> text=关于我们');
    await expect(page).toHaveURL(/\/about/);
  });

  test('should navigate back to homepage from logo', async ({ page }) => {
    await page.click('nav >> text=关于我们');
    await expect(page).toHaveURL(/\/about/);
    await page.click('header >> a >> img');
    await expect(page).toHaveURL(/\/|#\/$/);
  });

  test('all routes should have no console errors', async ({ page }) => {
    const routes = ['/', '/products', '/solutions', '/about'];
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));
    for (const route of routes) {
      await page.goto(route);
      await page.waitForLoadState('networkidle');
    }
    expect(errors.filter(e => !e.includes('favicon'))).toHaveLength(0);
  });
});
