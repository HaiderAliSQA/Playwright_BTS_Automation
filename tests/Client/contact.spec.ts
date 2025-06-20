import { test, expect } from '@playwright/test';
import { ClientPage } from '../../pages/ClientPage';
import { BasePage } from '../../pages/BasePage';
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
    await clientPage.navigateToClients();
     await clientPage.selectclient();

    await clientPage.fillClientlocation();
    
    // Verify client was created
    //await expect(page.getByText(TestData.clientName)).toBeVisible();
  });
  test.skip("should edit client", async ({ page }) => {
    const clientEdit = new ClientPage(page);
    // ...edit test steps here
    await clientEdit.navigateToClients();
    await clientEdit.selectclient();
    await clientEdit.editclient();
    await clientEdit.saveClient();
  });
  test("Add location in the Client Grid" , ({page})=>{

  })
});