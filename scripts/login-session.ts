import { chromium } from 'playwright';

(async () => {
  const context = await chromium.launchPersistentContext('auth/session-data', {
    headless: false,
    viewport: null,
  });
  const page = await context.newPage();
  await page.goto('http://localhost:4200/login');
  // Yahan apna login steps likhein, ya manually login karen
  // Example:
  // await page.fill('input[name="username"]', 'YOUR_USERNAME');
  // await page.fill('input[name="password"]', 'YOUR_PASSWORD');
  // await page.click('button[type="submit"]');
  // Ya manually login karen

  // Browser ko band na karein, tab open chhod dein
  await new Promise(() => {});
})(); 