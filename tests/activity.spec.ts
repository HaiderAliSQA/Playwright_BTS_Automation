import { test, expect } from "@playwright/test";
import { activitypage } from "../pages/AddNewActivity";

  test("Create a Simple activity", async ({ page }) => {
    const activityPage = new activitypage(page);
    await activityPage.OpenActivityGrid();
    //await activityPage.AtivitytitleAssertion();

    await activityPage.FillActivitydetail();
    //await activityPage.IsPlacementSchoolActivity();
    //await activityPage.time();
    await activityPage.simpleActivityTime();
    await activityPage.SelectStudent();
    //await activityPage.RepeatchekBox()
  });
  test.skip(" Activity Repeat Daily After  date ", async ({ page })=>{
    const activityPage = new activitypage(page);
    await activityPage.OpenActivityGrid();
    await activityPage.RepeatchekBox();
    await activityPage.FillActivitydetail();
    await activityPage.RepeatDailyAfter();
  });
   test.skip(" Activity Repeat Daily ON   date ", async ({ page }) => {
     const activityPage = new activitypage(page);
     await activityPage.OpenActivityGrid();
     await activityPage.RepeatchekBox();
     await activityPage.FillActivitydetail();
     await activityPage.RepeatDailyON();
   });
   test.skip(" Activity Repeat Weekly Afer   date ", async ({ page }) => {
     const activityPage = new activitypage(page);
     await activityPage.OpenActivityGrid();
     await activityPage.RepeatchekBox();
     await activityPage.FillActivitydetail();
     await activityPage.RepeatWeeklyAfter();
   });
   test.skip(" Activity Repeat Weekly ON   date ", async ({ page }) => {
     const activityPage = new activitypage(page);
     await activityPage.OpenActivityGrid();
     await activityPage.RepeatchekBox();
     await activityPage.FillActivitydetail();
     await activityPage.RepeatWeeklyON();
   });
