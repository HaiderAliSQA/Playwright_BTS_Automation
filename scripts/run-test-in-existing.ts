import { chromium } from 'playwright';

(async () => {
  const userDataDir = 'auth/session-data';
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    viewport: null,
  });

  const page = await context.newPage();

  // Yahan apna test code likhein
  await page.goto('http://localhost:4200/bts/students');
  // Example: await page.click('button:has-text("Add Student")');

  console.log('✅ Test finished, tab open rahega');
  // Tab ko band na karein, browser bhi open rahega
  await new Promise(() => {}); // Infinite wait
})(); 