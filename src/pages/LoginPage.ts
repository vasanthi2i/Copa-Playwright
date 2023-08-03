import { Locator, Page } from "@playwright/test";
import { Loginpageint } from "../interfaces/Loginpageint";


export class LoginPage implements Loginpageint {
    page: Page;
    email: Locator;
    pwd: Locator;
    loginbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.getByLabel('Email');
        this.pwd = page.getByLabel('Password', { exact: true });
        this.loginbutton = page.getByRole('button', { name: 'Login' });
    }


    async enterEmail(emailval: string): Promise<void> {
        await this.email.click();
        await this.email.fill(emailval);

    }
    async enterPassWord(pwd: string): Promise<void> {
        await this.pwd.click();
        await this.pwd.fill(pwd);
    }
    async clickLogin(): Promise<void> {
        await this.loginbutton.click();
    }

    async enterEmailPassWordandLogin(emailval: string, pwd: string): Promise<void> {
        await this.enterEmail(emailval);
        await this.enterPassWord(pwd);
        await this.clickLogin();

    }


}