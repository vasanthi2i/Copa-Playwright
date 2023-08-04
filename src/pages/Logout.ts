import { Locator, Page } from "@playwright/test";
import { Logoutint } from "../interfaces/Logoutint";


export class Logout implements Logoutint {
    page: Page;
    accountdropdown: Locator;
    myaccount: Locator;
    changepassword: Locator;
    logout: Locator;

    constructor(page: Page){
        this.page = page;
        this.accountdropdown = page.getByTestId('ArrowDropDownIcon');
        this.logout = page.locator("//li[contains(text(),'Logout')]");
    }

    async clickMyAccount(): Promise<void> {
        await this.accountdropdown.click();
    }
    clickChangePassword(): void {
        throw new Error("Method not implemented.");
    }
    async clickLogout(): Promise<void> {
        await this.logout.click();
    }

}