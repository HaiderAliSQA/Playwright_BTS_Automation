import { test, expect } from '@playwright/test';
import { StudentPage } from '../../pages/StudentPage';
import { TestData } from '../../utils/TestData';
import { ClientPage } from "../../pages/ClientPage";

test.describe.serial('Create Contact as a Student', () => {
  let studentPage: StudentPage;
  let clientPage: ClientPage;
  let createdStudentName: string;

  test.beforeEach(async ({ page }) => {
    studentPage = new StudentPage(page);
    clientPage = new ClientPage(page);
  });

  test.skip('should create new student', async ({ page }) => {
    await clientPage.navigateToClients();
    await clientPage.selectClient();
    await studentPage.selectStudentGrid();
    await studentPage.addStudent();
    await studentPage.fillStudentDetails();
    await studentPage.selectServiceType();
   
    await studentPage.saveStudent();
     await studentPage.EditStudent();
     await studentPage.saveStudent();
  });
  test(" Edit Student " , async ({page})=>{
    await clientPage.navigateToClients();
    await clientPage.selectClient();
    await studentPage.selectStudentGrid();
    await studentPage.EditStudent();
    await page.waitForTimeout(5000)
     await studentPage.saveStudent();

  })
});
