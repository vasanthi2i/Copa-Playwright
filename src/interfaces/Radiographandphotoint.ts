import { Locator, Page } from "@playwright/test";



export interface Radiographandphotoint {


    uploadPanorex(): void;
    uploadFullFace(): void;
    uploadRetractedSmile(): void;

    moveback(): void;
    moveNext(): void;
    clickCancel(): void;

}
