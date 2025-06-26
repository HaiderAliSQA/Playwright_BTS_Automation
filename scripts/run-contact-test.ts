// import { chromium } from 'playwright';
// import { ClientPage } from '../pages/ClientPage';
// import { TestData } from '../utils/TestData';

// (async () => {
//   try {
//     const context = await chromium.launchPersistentContext('auth/session-data', {
//       headless: false,
//       viewport: null,
//       args: ['--start-maximized']
//     });

//     const page = await context.newPage();
//     const clientPage = new ClientPage(page);

//     try {
//       // Navigate and create client
//       await clientPage.navigateToClients();
//       await clientPage.clickClientsTab();
//       await clientPage.clickAddClient();
//       await clientPage.fillClientDetails(TestData.clientName);
//       await clientPage.saveClient();

//       // Store the created client name for later tests
//       const createdClientName = TestData.clientName;

//       // Edit client
//       await clientPage.navigateToClients();
//       await clientPage.selectClient();
//       await clientPage.editClient();
//       await clientPage.saveClient();

//       // Add location
//       await clientPage.navigateToClients();
//       await clientPage.selectClient();
//       await clientPage.fillClientLocation();

//       console.log("✅ contact.spec.ts test steps done, tab open rahega");
//     } catch (error) {
//       console.error('Error during test execution:', error);
//     }

//     // Keep the browser open
//     await new Promise(() => {});
//   } catch (error) {
//     console.error('Error launching browser:', error);
//   }
// })(); 