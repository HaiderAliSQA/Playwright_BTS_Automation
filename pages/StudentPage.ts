import { Page } from "@playwright/test";
import { Studentlocator } from './locators/student_locator';
import { TestUtils } from "../utils/TestUtils";

export class StudentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

//   async navigateToStudents() {
//     await this.page.goto("http://localhost:4200/bts/students");
//     await this.page.locator(Studentlocator.studentsTab).click();
//     await this.page.waitForTimeout(2000);
//   }

  async selectStudentGrid() {
    await this.page.locator(Studentlocator.selectStudentGrid).click();
    await this.page.waitForTimeout(1000)
  }

  async addStudent() {
    await this.page.locator(Studentlocator.addStudentButton).click();
    await this.page.waitForTimeout(1000);
  }

  async fillStudentDetails() {
    const randomDigits = TestUtils.generateRandomDigits();
    
    await this.page.locator(Studentlocator.StudentfirstName).fill(`Student ${randomDigits}`);
        await this.page
          .locator(Studentlocator.StudentMidlleName)
          .fill(`Student ${randomDigits}`);
              await this.page
                .locator(Studentlocator.StudentLastName)
                .fill(`Student ${randomDigits}`);


  }
  async selectServiceType(){
    await this.page.locator(Studentlocator.addServicebutton).click()
    await this.page.waitForTimeout(3000)
    
    const PONumerStudentGrid1 = TestUtils.generateRandomPONumber();
    
    // Wait for service type dropdown with retry
    await this.page.locator(Studentlocator.SelectServiceTypes).waitFor({ state: 'visible', timeout: 10000 });
    await this.page.locator(Studentlocator.SelectServiceTypes).selectOption({ label: "Assistive Technology / SLP" });
    
    // Wait longer for PO field to appear
    await this.page.waitForTimeout(3000);
    
    // Wait for PO number field with retry
    await this.page.locator(Studentlocator.PONumerStudentGrid).waitFor({ state: 'visible', timeout: 10000 });
    const poField = this.page.locator(Studentlocator.PONumerStudentGrid);
    await poField.click();
    await poField.fill(PONumerStudentGrid1);
    await this.page.waitForTimeout(2000);
  }
  async EditStudent (){
    await this.page.locator(Studentlocator.studentEdit).click();
    const firstOption = this.page.locator('xpath=/html[1]/body[1]/ngb-modal-window[1]/div[1]/div[1]/app-add-edit-student[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ng-select[1]/ng-dropdown-panel[1]/div[1]/div[2]/div[1]/span[1]');
    
    // Dropdown ko open karo
    await firstOption.click();
    await this.page.waitForTimeout(500); // wait for options to load

    // Pehli option ko select karo
    await this.page.locator('ng-dropdown-panel .ng-option').first().click();
  }

  async saveStudent() {
    await this.page.locator(Studentlocator.saveStudentButton).click();
    await this.page.waitForTimeout(2000);
  }
}