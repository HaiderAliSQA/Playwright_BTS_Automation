export class ClientLocators {
  // Navigation Locators
  static readonly clientsTab = "//span[normalize-space()='Clients']";
  static readonly addClientButton = "//button[normalize-space()='Add Client']";
  static readonly saveButton = "//button[normalize-space()='Save']";
  
  // Client Form Locators
  static readonly clientNameInput = "//input[@name='name']";
  static readonly poNumber = "//input[@name='poNumber']";
  static readonly invoiceTeplate = "//select[@name='defaultInvoiceFormat']";
  static readonly billingattn = "//input[@name='billingAttn']";
  static readonly billingOffice1 = "//input[@name='billingOffice1']";
  static readonly billingOffice2 = "//input[@name='billingOffice2']";
  static readonly placementSchool = "//label[@for='placementSchool']";
  static readonly prospective = "//label[@for='prospective']";
  
  // Client Search Locators
  static readonly searchClientInput = "//input[@placeholder='Search client']";
  static readonly firstClientRow = "//tbody/tr[1]/td[1]/a[1]";
  static readonly editClientButton = "button[title='Edit Client']";
  
  // Location Locators
  static readonly addLocationIcon = "//div[@class='col-lg-8 col-xlg-9 col-md-7']//div[2]//div[1]//span[1]//a[1]//i[1]";
  static readonly locationTitle = "//input[@name='title']";
  static readonly locationAddress = "//input[@name='address']";
  static readonly locationPhone = "//input[@name='phone']";
  static readonly locationFaxNumber = "//input[@name='fax']";
  static readonly locationWebsite = "//input[@name='website']";
} 