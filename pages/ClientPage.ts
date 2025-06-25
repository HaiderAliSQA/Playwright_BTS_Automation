import { Page } from '@playwright/test';
import { ClientLocators } from './locators/ClientLocators';
import { TestUtils } from '../utils/TestUtils';
import { chromium } from 'playwright';

export class ClientPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigation Actions
  async navigateToClients() {
    try {
      await this.page.goto("http://localhost:4200/bts/clients");
      
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForTimeout(5000);
      
      // Wait for the clients tab to be visible and clickable
      await this.page.waitForSelector(ClientLocators.clientsTab, { 
        state: 'visible',
        timeout: 30000 
      });
      
      await this.page.click(ClientLocators.clientsTab);
      await this.page.waitForTimeout(2000);
    } catch (error) {
      console.error('Error during navigation:', error);
      throw error;
    }
  }

  async clickClientsTab() {
    await this.page.locator(ClientLocators.clientsTab).click();
    await this.page.waitForTimeout(1000);
  }

  async clickAddClient() {
    await this.page.locator(ClientLocators.addClientButton).click();
    await this.page.waitForTimeout(1000);
  }

  // Client Management Actions
  async selectClient() {
    await this.page.locator(ClientLocators.searchClientInput).fill("Playwright Test Client");
    await this.page.waitForTimeout(1000);
    await this.page.locator(ClientLocators.firstClientRow).click();
  }

  async editClient() {
    await this.page.locator(ClientLocators.editClientButton).click();
    await this.page.waitForTimeout(1000);
    const randomDigits = TestUtils.generateRandomDigits();
    const billingName = `Billing ${randomDigits}`;
    await this.page.locator(ClientLocators.billingattn).fill(billingName);
  }

  async fillClientDetails(clientName: string) {
    const randomDigits = TestUtils.generateRandomDigits();
    const clientRandomName = TestUtils.generateRandomClientName();
    
    await this.page.locator(ClientLocators.clientNameInput).fill(clientRandomName);
    await this.page.locator(ClientLocators.poNumber).fill(TestUtils.generateRandomPONumber());
    
    await this.page.locator(ClientLocators.invoiceTeplate).selectOption({ label: "Simplified" });
    
    await this.page.locator(ClientLocators.billingattn).fill(`Billing Attn ${randomDigits}`);
    await this.page.locator(ClientLocators.billingOffice1).fill(`Billing Office 1 ${randomDigits}`);
    await this.page.locator(ClientLocators.billingOffice2).fill(`Billing Office 2 ${randomDigits}`);
    
    //await this.page.check(ClientLocators.placementSchool);
    await this.page.check(ClientLocators.prospective);

    await this.page.waitForTimeout(1000);
  }

  async saveClient() {
    await this.page.locator(ClientLocators.saveButton).click();
    await this.page.waitForTimeout(2000);
  }

  // Location Management Actions
  async fillClientLocation() {
    const randomDigits = TestUtils.generateRandomDigits();
    
    await this.page.locator(ClientLocators.addLocationIcon).click();
    //await this.page.locator(ClientLocators.locationTitle).waitFor({ state: 'visible' });
    
    await this.page.locator(ClientLocators.locationTitle).fill(`Location ${randomDigits}`);
    await this.page.locator(ClientLocators.locationAddress).fill(`Address ${randomDigits}`);
    await this.page.locator(ClientLocators.locationPhone).fill(TestUtils.generateRandomUSPhoneNumber());
    await this.page.locator(ClientLocators.locationFaxNumber).fill(`Fax number ${randomDigits}`);
    await this.page.locator(ClientLocators.locationWebsite).fill(`www.abc ${randomDigits}`);
    
    await this.page.locator(ClientLocators.saveButton).click();
  }

  async FillActivitydetail(Activitytitle : string ){
  }
}