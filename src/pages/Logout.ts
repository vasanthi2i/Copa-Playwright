import { Locator, Page } from "@playwright/test";
import { Logoutint } from "../interfaces/Logoutint";


export class Logout implements Logoutint {
    page: Page;
    accountdropdown: Locator;
    myaccount: Locator;
    changepassword: Locator;
    logout: Locator;

    clickMyAccount(): void {
        throw new Error("Method not implemented.");
    }
    clickChangePassword(): void {
        throw new Error("Method not implemented.");
    }
    clickLogout(): void {
        throw new Error("Method not implemented.");
    }

}