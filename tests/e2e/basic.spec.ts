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
});
