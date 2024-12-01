import { test, expect } from "@playwright/test";

test("has menu buttons", async ({ context, page }) => {
  // GIVEN a user visiting salad society website
  // WHEN they click on e of the 3 Our Menu links
  // THEN the are redirected to a page with the menu
  await page.goto("https://saladsociety.com");

  const menuPageLinks = page.getByRole("link", { name: "Our Menu" });
  expect(menuPageLinks).toHaveCount(3);

  const menuPagePromise = context.waitForEvent("page");
  await menuPageLinks.first().click();
  const menuPage = await menuPagePromise;
  // await menuPage.waitForLoadState();
  expect(menuPage.url()).toBe(
    "https://saladsociety.com/assets/menus/menu2024.pdf"
  );
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
