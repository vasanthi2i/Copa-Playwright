import { Locator, Page } from "@playwright/test";



export interface Clinicalinformationint {

    enterYes(): void;
    enterNo(): void;
    checkAllApplies(checker: String): void;
    enterNotes(notes: String): void;
    moveback(): void;
    moveNext(): void;
    clickCancel(): void;
    returnSaveForLaterPopupLocator(): Promise<Locator>;
    returnSaveAndCloseLocator(): Promise<Locator>;
    returnDiscardButtonLocator(): Promise<Locator>;
    returnClosePopupLocator(): Promise<Locator>;

}
