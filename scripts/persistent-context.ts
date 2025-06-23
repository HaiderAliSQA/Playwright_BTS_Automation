import { chromium } from 'playwright';
import { ClientPage } from '../pages/ClientPage';

(async () => {
  const userDataDir = 'auth/session-data'; // Session folder
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    viewport: null,
  });

  const page = await context.newPage();
  const clientPage = new ClientPage(page);

  // Yahan se contact.spec.ts ka test code paste karein:
  await clientPage.navigateToClients();
  // ...baqi test steps...

  console.log("✅ contact.spec.ts test steps done, tab open rahega");
  await new Promise(() => {});
})(); 