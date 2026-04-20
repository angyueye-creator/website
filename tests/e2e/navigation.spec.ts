import { test, expect } from '@playwright/test';

test.describe('导航测试', () => {
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
});
