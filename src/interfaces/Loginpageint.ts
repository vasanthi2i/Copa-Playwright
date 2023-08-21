import { Locator, Page } from "@playwright/test";



export interface Loginpageint {


    enterEmail(email: String): void;
    enterPassWord(pwd: String): void;
    clickLogin(): void;
    enterEmailPassWordandLogin(email: String, pwd: String): void;


}


