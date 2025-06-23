import { test, expect } from '@playwright/test';
import { ClientPage } from '../../pages/ClientPage';
import { TestData } from '../../utils/TestData';

test.describe.serial('Create Contact as a Client', () => {
  let clientPage: ClientPage;

  test.beforeEach(async ({ page }) => {
    clientPage = new ClientPage(page);
  });

  test.skip('should create new contact', async () => {
    await clientPage.navigateToClients();
    await clientPage.clickClientsTab();
    await clientPage.clickAddClient();
    await clientPage.fillClientDetails(TestData.clientName);
    await clientPage.saveClient();
  });

  test.skip('should edit client', async () => {
    await clientPage.navigateToClients();
    await clientPage.selectClient();
    await clientPage.editClient();
    await clientPage.saveClient();
  });

  test('Add location in the Client Grid', async () => {
    await clientPage.navigateToClients();
    await clientPage.selectClient();
    await clientPage.fillClientLocation();
  });
});