import { Locator,Page } from "@playwright/test";



export interface PatientOverviewint {
    
    getPatientname(page: Page, patientName: String): Promise<string>;
}