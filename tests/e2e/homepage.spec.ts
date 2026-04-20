import { test, expect } from '@playwright/test';

test.describe('首页测试', () => {
  test('首页内容展示', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).not.toBeEmpty();
  });
});
