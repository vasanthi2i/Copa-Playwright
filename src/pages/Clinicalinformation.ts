import { Locator, Page } from "@playwright/test";
import { Clinicalinformationint } from "../interfaces/Clinicalinformationint";


export class Clinicalinformation implements Clinicalinformationint {
    page: Page;
    yes: Locator;
    no: Locator;
    checkbox: Locator;
    notes: Locator;
    back: Locator;
    cancel: Locator;
    next: Locator;


    constructor(page: Page) {
        this.page = page;
        this.yes = page.getByRole('button', { name: 'Yes' });
        this.no = page.getByRole('button', { name: 'No' });
        this.notes = page.getByTestId('leftArea');
        this.next = page.getByRole('button', { name: 'Next' });

    }

    //page.getByText('Does this patient have any of the following conditions?')

    async enterYes(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async enterNo(): Promise<void> {
        await this.no.click();
    }
    async checkAllApplies(checker: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async enterNotes(notes: string): Promise<void> {
        await this.notes.fill(notes);
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


}