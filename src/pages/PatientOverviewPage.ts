import { Locator, Page } from "@playwright/test";
import { PatientOverviewint } from "../interfaces/PatientOverviewint";


export class PatientOverviewPage implements PatientOverviewint {
    page: Page;
    viewNotes: Locator;
    createTxPlan: Locator;
    edit: Locator;
    status: Locator;
    archive: Locator;

    constructor(page: Page) {
        this.page = page;
        this.status = page.getByText('PROSPECTIVE');

    }

    async getPatientname(page, patientName): Promise<string>{
        const patName = page.getByText(patientName);
        return patName;
    }
}

