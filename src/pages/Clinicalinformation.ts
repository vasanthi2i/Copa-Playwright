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
    saveForLaterPopup: Locator;
    saveAndCloseButton: Locator;
    discardButton: Locator;
    closePopupButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.yes = page.getByRole('button', { name: 'Yes' });
        this.no = page.getByRole('button', { name: 'No' });
        this.notes = page.getByTestId('leftArea');
        this.next = page.getByRole('button', { name: 'Next' });
        this.cancel = page.getByRole('button', { name: 'Cancel'});
        this.saveForLaterPopup = page.locator("//div[@role='dialog']//span[contains(text(),'Save this patient for later?')]");
        this.saveAndCloseButton = page.getByRole('button', { name: 'Yes, save and close'});
        this.discardButton = page.getByRole('button', { name: 'No, discard'});
        this.closePopupButton = page.getByTestId("CloseIcon");

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
        await this.cancel.click();
    }

    async returnSaveForLaterPopupLocator(): Promise<Locator>{
        return this.saveForLaterPopup;
    }
    async returnSaveAndCloseLocator(): Promise<Locator>{
        return await this.saveAndCloseButton;
    }
    async returnDiscardButtonLocator(): Promise<Locator>{
        return await this.discardButton;
    }
    async returnClosePopupLocator(): Promise<Locator>{
        return await this.closePopupButton;
    }


}