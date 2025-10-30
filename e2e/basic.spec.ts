import { test, expect } from "@playwright/test";

test.describe("Hostel Management System", () => {
  test("should load the homepage", async ({ page }) => {
    await page.goto("http://localhost:3000");

    // Should redirect to signin if not authenticated
    await expect(page).toHaveURL(/.*signin/);
  });

  test("should have signin form", async ({ page }) => {
    await page.goto("http://localhost:3000/auth/signin");

    // Check for signin form elements
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });
});
