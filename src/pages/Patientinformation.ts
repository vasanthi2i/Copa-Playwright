import { Locator, Page } from "@playwright/test";
import { Patientinformationint } from "../interfaces/Patientinformationint";


export class Patientinformation implements Patientinformationint {
    page: Page;
    back: Locator;
    cancel: Locator;
    next: Locator;
    firstname: Locator;
    lastname: Locator;
    date: Locator;
    month: Locator;
    year: Locator;
    email: Locator;
    termsandconditionscheckbox: Locator;
    phonenumber: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstname = page.getByLabel('First name *');
        this.lastname = page.getByLabel('Last name *');
        this.date = page.getByLabel('DD');
        this.month = page.getByLabel('Month');
        this.year = page.getByLabel('Year');
        this.email = page.getByLabel('Email *');
        this.next = page.getByRole('button', { name: 'Next' });
        this.termsandconditionscheckbox = page.getByLabel('Patient agrees to opt-in to SMS');
        this.phonenumber = page.getByLabel('Cell phone *');

    }


    async enterFirstName(fname: string): Promise<void> {
        await this.firstname.fill(fname);
    }
    async enterLastName(lname: string): Promise<void> {
        await this.lastname.fill(lname);
    }
    async enterDob(mm: string, dd: string, yy: string): Promise<void> {
        await this.page.getByLabel('MM').click();
        await this.month.fill(mm);
        await this.date.fill(dd);
        await this.year.fill(yy);

    }

    async enterEmail(emailval: string): Promise<void> {
        await this.email.fill(emailval);
    }

    async enterPhonenumber(phnumber: string): Promise<void> {
        await this.phonenumber.fill(phnumber);
    }

    async clickTCCheckBox(): Promise<void> {
        await this.termsandconditionscheckbox.check();

    }

    async moveback(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async moveNext(): Promise<void> {
        await this.next.click();

    }
    async clickCancel(): Promise<void> {
        throw new Error("Method not implemented.");
    }


    async enterPatientinformation(fname: string, lname: string, mm: string, dd: string, yy: string, emailval: string, phnumber?: string): Promise<void> {
        await this.enterFirstName(fname);
        await this.enterLastName(lname);
        await this.enterDob(mm, dd, yy);
        await this.enterEmail(emailval);
        if (phnumber) {
            await this.enterPhonenumber(phnumber);
            await this.clickTCCheckBox();

        }
        await this.moveNext();


    }





}