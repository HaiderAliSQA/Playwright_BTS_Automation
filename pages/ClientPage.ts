import { Page } from '@playwright/test';
import { test, expect } from '@playwright/test';

export class ClientPage {
  readonly page: Page;

  // Locators
  readonly clientsTab = "//span[normalize-space()='Clients']";
  readonly addClientButton = "//button[normalize-space()='Add Client']";
  readonly clientNameInput = "//input[@name='name']";
  readonly saveButton = "//button[normalize-space()='Save']";
  poNumber = "//input[@name='poNumber']";
  invoiceTeplate = "//select[@name='defaultInvoiceFormat']";
  billingattn = "//input[@name='billingAttn']";
  billingOffice1 = "//input[@name='billingOffice1']";
  billingOffice2 = " //input[@name='billingOffice2']";
  placementSchool = "//label[@for='placementSchool']";
  prospective = "//label[@for='prospective']";
  addLocationIcon =
    "//div[@class='col-lg-8 col-xlg-9 col-md-7']//div[2]//div[1]//span[1]//a[1]//i[1]";
  locatioinTitle = "//input[@name='title']";
  LocationAddress = "//input[@name='address']";
  locationPhone = "//input[@name='phone']";
  locationfaxNumber = "//input[@name='fax']";
  locationwebsite = "//input[@name='website']";

  constructor(page: Page) {
    this.page = page;
  }

  // Actions
  async navigateToClients() {
    await this.page.goto("http://localhost:4200/bts/clients");
    await this.page.locator("//span[normalize-space()='Clients']").click();
    await this.page.waitForTimeout(2000);
  }

  async selectclient() {
    // Generate a random 3-digit number and pass it to Client name with the Name Playwright Test Client
    // const randomDigits = Math.floor(100 + Math.random() * 900); // 3-digit random number
    // const clientName = `Playwright Test Client ${randomDigits}`;
    await this.page
      .locator("//input[@placeholder='Search client']")
      .fill("Playwright Test Client");
    await this.page.waitForTimeout(1000);
    await this.page.locator("//tbody/tr[1]/td[1]/a[1]").click();
  }

  async editclient() {
    await this.page.locator("button[title='Edit Client']").click();
    await this.page.waitForTimeout(1000);
    const randomDigits = Math.floor(100 + Math.random() * 900); // 3-digit random number
    const BillingName = `Billing ${randomDigits}`;
    await this.page.locator("//input[@name='billingAttn']").fill(BillingName);
  }

  async clickClientsTab() {
    await this.page.locator(this.clientsTab).click();
    await this.page.waitForTimeout(1000);
  }

  async clickAddClient() {
    await this.page.locator(this.addClientButton).click();
    await this.page.waitForTimeout(1000);
  }

  async fillClientDetails(clientName: string) {
    const randomDigits = Math.floor(100 + Math.random() * 900);
    const ClientRendumName = ` Playwright Test Client ${randomDigits}`;
    await this.page.locator(this.clientNameInput).fill(ClientRendumName);
    // Generate a Randum PO Number which contain Multi Value with spevial cracter
    await this.page.locator(this.poNumber).fill(this.generateRandomPONumber());
    // Select billing Type
    await this.page
      .locator(this.invoiceTeplate)
      .selectOption({ label: "Simplified" });
    //Type Billing Attn
    await this.page
      .locator(this.billingattn)
      .fill(`Billing Attn ${randomDigits}`);
    //type Billing Office 1 Address
    await this.page
      .locator(this.billingOffice1)
      .fill(`Billing Office 1 ${randomDigits}`);
    // Type Billing Office 2 Address
    await this.page
      .locator(this.billingOffice2)
      .fill(`Billing Office 2 ${randomDigits}`);
    //check box click on Placement School
    await this.page.check(this.placementSchool);
    //check on Is Prospective Customer
    await this.page.check(this.prospective);

    await this.page.waitForTimeout(1000);
  }

  async saveClient() {
    await this.page.locator(this.saveButton).click();
    await this.page.waitForTimeout(2000);
  }

  // Utility: Generate a random PO Number with multiple values and special characters
  generateRandomPONumber(): string {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    let poNumber = "";
    for (let i = 0; i < 12; i++) {
      poNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return poNumber;
  }

  generateRandomUSPhoneNumber(): string {
    // Format: (XXX) XXX-XXXX
    const area = Math.floor(200 + Math.random() * 800); // avoid area codes starting with 0/1
    const prefix = Math.floor(200 + Math.random() * 800);
    const line = Math.floor(1000 + Math.random() * 9000);
    return `(${area}) ${prefix}-${line}`;
  }

  async fillClientlocation() {
    const randomDigits = Math.floor(100 + Math.random() * 900);
    await this.page.locator(this.addLocationIcon).click();
    await this.page.locator(this.locatioinTitle).waitFor({ state: 'visible' });
    await this.page.locator(this.locatioinTitle).fill(`Location ${randomDigits}`);
    // Add Address 
    await this.page.locator(this.LocationAddress).fill(`Address ${randomDigits}`);
    // Add phone number
    await this.page.locator(this.locationPhone).fill(this.generateRandomUSPhoneNumber());
    // add fax number
    await this.page.locator(this.locationfaxNumber).fill(`Fax number ${randomDigits}`);
    //add Website 
    await this.page.locator(this.locationwebsite).fill(`www.abc ${randomDigits}`);
    await this.page.locator(this.saveButton).click();
  }
}

//     // Yahan aur bhi tests add kar sakte hain

//  // <-- Close test.describe.serial here