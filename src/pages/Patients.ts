import { Locator, Page } from "@playwright/test";
import { Patientsint } from "../interfaces/Patientsint";


export class Patients implements Patientsint {
    page: Page;
    addanewpatientbutton: Locator;
    dropdownaccount: Locator;
    myaccount: Locator;
    changepassword: Locator;
    logout: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addanewpatientbutton = page.getByRole('button', { name: 'Add a new patient' });
    }

    async addNewPatient(): Promise<void> {
        await this.addanewpatientbutton.isVisible();
        await this.addanewpatientbutton.click();
    }
    async enterSearch(text: string): Promise<void> {
        throw new Error("Method not implemented.");
    }


}