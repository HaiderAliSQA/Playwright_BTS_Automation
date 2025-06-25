import { expect, Page } from "@playwright/test";
import { activitylocator } from "./locators/activitylocator";
import { TestUtils } from "../utils/TestUtils";
import { chromium } from "playwright";
import path from "path";

export class activitypage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async OpenActivityGrid() {
    await this.page.goto("http://localhost:4200/bts/dashboard");
    await this.page.waitForTimeout(5000);
    await this.page.locator(activitylocator.CreateNewButton).click();
    await this.page.locator(activitylocator.AddNewActivity).click();
  }

  async FillActivitydetail() {
    console.log("FillActivitydetail called");
    const randomName = TestUtils.generateRandomClientName();
    console.log(randomName);
    // Name Fill

    const titleField = this.page.locator(activitylocator.activityName);
    await titleField.waitFor({ state: "visible" });
    await expect(titleField).toBeEnabled();
    await titleField.fill(`Activity Form playwright ${randomName}`);

    //Select provider
    await this.page.locator(activitylocator.WBSDropdownContainer).click();
    await this.page
      .locator(activitylocator.providerSearchinput)
      .fill(" UI Test");
    await this.page.locator(".ng-option:has-text('UI Test')");

    // Step 1: Dropdown ko click karke open karein
    console.log("Dropdown selector:", activitylocator.clientDropdownContainer);
    await this.page.locator(activitylocator.clientDropdownContainer).click();
    // Select Client

    await this.page
      .locator(activitylocator.clientSearchInput)
      .fill("Client Simple Activity");

    await this.page.locator('.ng-option:has-text("Client Simple Activity")').click();
    //Select Client Location
    await this.page.locator(activitylocator.clientLocationDropdownContainer).click();
    await this.page.locator(activitylocator.clientLocationInput).fill("Location");
    // 2nd value select karni ho to index 1
   await this.page.locator('.ng-option:has-text("Location")').click();

    // select WBS
    await this.page.locator(activitylocator.activityDropdownContainer).click();
    await this.page.waitForTimeout(5000);
    await this.page.locator(activitylocator.SelectWBS).fill("BTO");
    await this.page.locator('.ng-option:has-text("BTO")').click();
  }

  async simpleActivityTime () {
    console.log(" lfhewofhwoh");
    const date = TestUtils.generateRandomPastDate();
    console.log("Rendum date ", date);

    await this.page.locator(activitylocator.activityStartDate).fill(date);
    await this.page.waitForTimeout(5000);
    const activityTime = TestUtils.generateRandomTime();
    console.log(" Start time of Activity ", activityTime);
    await this.page
      .locator(activitylocator.activityStartTime)
      .fill(activityTime);
    //await this.page.waitForTimeout(8000);

    // 1. Open the dropdown
    const activityduration = this.page.locator(
      activitylocator.activityduration
    );
    //await activityduration.click(); // (optional, for UI)
    await this.page.waitForTimeout(5000);
    // await activityduration.selectOption({ label: "15 Min" });
    // this.page.waitForTimeout(5000)
  }
async SelectStudent(){
  await this.page.locator(activitylocator.ActivityStudentDropdownContainer).click();
  await this.page.locator(activitylocator.StudentSearchInput).fill ("Student");
   await this.page.locator('.ng-option:has-text("Student")').click();

}
  async RepeatDailyAfter() {
    const RepeatsType = this.page.locator(activitylocator.ActivityType);

    await RepeatsType.selectOption({ label: "Daily" });

    const repectAfter_on = this.page.locator(activitylocator.Repeat_after_on);
    await repectAfter_on.selectOption({ label: "After" });
    const end_Date = TestUtils.getRepesatLastdateindays();
    console.log("After_end_date selector:", activitylocator.After_end_date);
    await this.page.locator(activitylocator.After_end_date).fill(`${end_Date}`);
  }
  async RepeatDailyON() {
    const RepeatsType = this.page.locator(activitylocator.ActivityType);

    await RepeatsType.selectOption({ label: "Daily" });

    const repectAfter_on = this.page.locator(activitylocator.Repeat_after_on);
    await repectAfter_on.selectOption({ label: "On" });

    const date = TestUtils.getDateAfter7Days();
    await this.page.locator(activitylocator.RepeatEndDateTime).fill(date);
    console.log(" randum date", date);
    await this.page.waitForTimeout(5000);
  }

  async RepeatWeeklyAfter() {
    const RepeatsType = this.page.locator(activitylocator.ActivityType);
    await RepeatsType.selectOption({ label: "Weekly" });
    const repectAfter_on = this.page.locator(activitylocator.Repeat_after_on);
    await repectAfter_on.selectOption({ label: "After" });
    const date = TestUtils.getRepesatLastdateindays();
    console.log(" ae gi ye ni ", date);
    //await expect(this.page.locator(activitylocator.After_end_date)).toBeVisible();
    console.log(this.page.locator(activitylocator.After_end_date));
    await this.page.locator(activitylocator.After_end_date).fill(`${date}`);
  }
  async RepeatWeeklyON (){
    const RepeatsType = this.page.locator(activitylocator.ActivityType);
    await RepeatsType.selectOption({ label: "Weekly" });
    const repectAfter_on = this.page.locator(activitylocator.Repeat_after_on);
    await repectAfter_on.selectOption({ label: "On" });
    const date = TestUtils.getDateAfter2Weeks();
    console.log(" ae gi ye ni ", date);
    //await expect(this.page.locator(activitylocator.After_end_date)).toBeVisible();
    console.log(this.page.locator(activitylocator.After_end_date));
    await this.page.locator(activitylocator.RepeatEndDateTime).fill(`${date}`);

  }

  async time() {
    // Ab yahan dekh kar sahi text use karein
    // await this.page.locator(".ng-option:has-text('15 Min')").click();
  }

  async IsPlacementSchoolActivity() {
    // console.log(" haider alu ")
    await this.page.check(activitylocator.IsPlacementSchoolActivity);
    await this.page.waitForTimeout(4000);
  }
  async RepeatchekBox() {
    await this.page.check(activitylocator.RepeatcheckBox);

    // Date Add
  }
  async AtivitytitleAssertion() {
    const Activitytitle = this.page.locator(activitylocator.Activitytitle);
    await expect(Activitytitle).toHaveText("Add New Activity");
    await this.page.waitForTimeout(1000);
  }

  async screenshotDropdown() {
    await this.page.screenshot({ path: "dropdown-open.png" });
  }
}
