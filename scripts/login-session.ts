// import { chromium } from 'playwright';

// (async () => {
//   const context = await chromium.launchPersistentContext('auth/session-data', {
//     headless: false,
//     viewport: null,
//   });
//   const page = await context.newPage();
//   await page.goto('http://localhost:4200/bts/login');

//   await page.locator("//img[@alt='Loginbtn']").click();
//   await page.waitForTimeout(8000);

//   await page.getByRole("textbox", { name: /email/i }).fill("hafizhaideraliuet@gmail.com");
//   await page.getByRole("button", { name: "Next" }).click();
//   await page.waitForTimeout(2000);

//   await page.getByRole("textbox", { name: /password/i }).fill("Rustam@90");
//   await page.getByRole("button", { name: "Next" }).click();

//   await page.waitForTimeout(2000);
//   if (await page.getByRole("button", { name: "Yes" }).isVisible()) {
//     await page.getByRole("button", { name: "Yes" }).click();
//   }

//   await page.waitForTimeout(5000);

//   // Save session state for future tests
//   await context.storageState({ path: "auth.json" });

//   // 🔁 Keep browser and tab open for 18 hours
//   await new Promise((resolve) => setTimeout(resolve, 18 * 60 * 60 * 1000));
// })(); 