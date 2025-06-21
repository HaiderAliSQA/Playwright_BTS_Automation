import { test, expect } from '@playwright/test';
import { ClientPage } from '../../pages/ClientPage';
import { TestData } from '../../utils/TestData';

test.describe('Create Contact as a Client', () => {
  test('should create new contact', async ({ page }) => {
    const clientPage = new ClientPage(page);
    
    // Navigate and create client
    await clientPage.navigateToClients();
    await clientPage.clickClientsTab();
    await clientPage.clickAddClient();
    await clientPage.fillClientDetails(TestData.clientName);
    await clientPage.saveClient();
    
    // Navigate back and select client to add location
    await clientPage.navigateToClients();
    await clientPage.selectClient();
    await clientPage.fillClientLocation();
    
    // Verify client was created
    //await expect(page.getByText(TestData.clientName)).toBeVisible();
  });

  test.skip("should edit client", async ({ page }) => {
    const clientEdit = new ClientPage(page);
    
    await clientEdit.navigateToClients();
    await clientEdit.selectClient();
    await clientEdit.editClient();
    await clientEdit.saveClient();
  });

  test("Add location in the Client Grid", async ({ page }) => {
    const clientPage = new ClientPage(page);
    
    await clientPage.navigateToClients();
    await clientPage.selectClient();
    await clientPage.fillClientLocation();
  });
});