import { Locator, Page } from "playwright";



export interface Loginpageint {


    enterEmail(email: String): void;
    enterPassWord(pwd: String): void;
    clickLogin(): void;
    enterEmailPassWordandLogin(email: String, pwd: String): void;


}


