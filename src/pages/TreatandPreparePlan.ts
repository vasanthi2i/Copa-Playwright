import { Locator, Page, expect } from "@playwright/test";
import { TreatandPreparePlanint } from "../interfaces/TreatandPreparePlanint";


export class TreatandPreparePlan implements TreatandPreparePlanint {
    page: Page;
    ResultBackdropModal: string;
    viewresults: Locator;
    tretmentcompleted: string;

    constructor(page: Page) {
        this.page = page;
        this.viewresults = page.getByRole('button', { name: 'View results' });
        this.ResultBackdropModal = '.MuiBackdrop-root';
        this.tretmentcompleted = "The treatment has completed. This is a simple case.";

    }
    async clickViewresults(): Promise<void> {

        await this.viewresults.click({ timeout: 600000 });

    }

    async validateResultModal(): Promise<void> {

        await this.page.waitForSelector(this.ResultBackdropModal, { timeout: 900000 });
        console.log(`Selector ${this.page.locator(this.ResultBackdropModal).isVisible()} has appeared.`)
    }

    async validateTreatmentCompletedStep(): Promise<boolean> {


        return await this.page.locator(this.tretmentcompleted).isVisible({ timeout: 800000 });

    }




}