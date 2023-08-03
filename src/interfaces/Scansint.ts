import { Locator, Page } from "playwright";



export interface Scansint {


    uploadUpperScan(): void;
    uploadLowerScan(): void;

    moveback(): void;
    moveNext(): void;
    clickCancel(): void;

}
