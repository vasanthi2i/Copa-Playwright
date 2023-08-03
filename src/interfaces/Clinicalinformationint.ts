import { Locator, Page } from "playwright";



export interface Clinicalinformationint {

    enterYes(): void;
    enterNo(): void;
    checkAllApplies(checker: String): void;
    enterNotes(notes: String): void;
    moveback(): void;
    moveNext(): void;
    clickCancel(): void;

}
