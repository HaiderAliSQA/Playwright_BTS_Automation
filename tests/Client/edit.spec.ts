import { test, expect } from "@playwright/test"  ;
import { ClientPage } from "../../pages/ClientPage";

test.describe("yahan hum client ko Edit kren gen", () =>  {
  test("should edit client", async ({ page }) => {
    const clientEdit = new ClientPage(page);
    // ...edit test steps here
    await clientEdit.navigateToClients();
    await clientEdit.selectclient();
    await clientEdit.editclient();
    await clientEdit.saveClient();
    });
})