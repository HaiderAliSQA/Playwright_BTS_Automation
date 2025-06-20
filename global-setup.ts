import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Visit login page
  await page.goto("http://localhost:4200/bts/login");

  // Click Microsoft login button
  await page.locator("//img[@alt='Loginbtn']").click();

  // Wait for redirect to Microsoft login page
  await page.waitForTimeout(8000);

  // Login - Email
  await page
    .getByRole("textbox", { name: /email/i })
    .fill("hafizhaideraliuet@gmail.com");
  await page.getByRole('button', { name: 'Next' }).click();

  await page.waitForTimeout(2000);

  // Login - Password
  await page.getByRole("textbox", { name: /password/i }).fill("Rustam@90");
  await page.getByRole('button', { name: 'Next' }).click();

  // Handle "Stay signed in?" prompt
  await page.waitForTimeout(2000);
  if (await page.getByRole('button', { name: 'Yes' }).isVisible()) {
    await page.getByRole('button', { name: 'Yes' }).click();
  }

  // Wait for redirect to dashboard
  await page.waitForTimeout(5000);

  // Store the authenticated state
  await context.storageState({ path: 'auth.json' });
  await browser.close();
}

export default globalSetup; 