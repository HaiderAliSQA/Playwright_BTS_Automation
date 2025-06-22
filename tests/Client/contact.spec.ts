import { test, expect } from '@playwright/test';
import { ClientPage } from '../../pages/ClientPage';
import { TestData } from '../../utils/TestData';

test.describe.serial('Create Contact as a Client', () => {
  let clientPage: ClientPage;
  let createdClientName: string;

  test.beforeEach(async ({ page }) => {
    clientPage = new ClientPage(page);
  });

  test('should create new contact', async ({ page }) => {
    // Navigate and create client
    await clientPage.navigateToClients();
    await clientPage.clickClientsTab();
    await clientPage.clickAddClient();
    await clientPage.fillClientDetails(TestData.clientName);
    await clientPage.saveClient();
    
    // Store the created client name for later tests
    createdClientName = TestData.clientName;
    
    // Verify client was created
    //await expect(page.getByText(TestData.clientName)).toBeVisible();
  });

  test("should edit client", async ({ page }) => {
    // This test will run only after the create client test
    const clientEdit = new ClientPage(page);
    
    await clientEdit.navigateToClients();
    await clientEdit.selectClient();
    await clientEdit.editClient();
    await clientEdit.saveClient();
  });

  test("Add location in the Client Grid", async ({ page }) => {
    // This test will run only after the create client test
    const clientPage = new ClientPage(page);
    
    await clientPage.navigateToClients();
    await clientPage.selectClient();
    await clientPage.fillClientLocation();
  });
});