import { Locator, Page } from "playwright";



export interface TreatandPreparePlanint {

    clickViewresults(): void;
    validateResultModal(): void;
    validateTreatmentCompletedStep(): Promise<boolean>;

}
