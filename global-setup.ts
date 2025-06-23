import { chromium } from "@playwright/test";
import type { FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("http://localhost:4200/bts/login");

  await page.locator("//img[@alt='Loginbtn']").click();
  await page.waitForTimeout(8000);

  await page
    .getByRole("textbox", { name: /email/i })
    .fill("hafizhaideraliuet@gmail.com");
  await page.getByRole("button", { name: "Next" }).click();
  await page.waitForTimeout(2000);

  await page.getByRole("textbox", { name: /password/i }).fill("Rustam@90");
  await page.getByRole("button", { name: "Next" }).click();

  await page.waitForTimeout(2000);
  if (await page.getByRole("button", { name: "Yes" }).isVisible()) {
    await page.getByRole("button", { name: "Yes" }).click();
  }

  await page.waitForTimeout(5000);

  await context.storageState({ path: "auth.json" });

  // 🔁 Keep browser and tab open for 18 hours
  console.log("Browser will stay open for 18 hours.");
  await new Promise((resolve) => setTimeout(resolve, 18 * 60 * 60 * 1000));
}

export default globalSetup;
