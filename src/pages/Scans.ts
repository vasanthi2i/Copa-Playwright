import { Locator, Page } from "@playwright/test";
import { Scansint } from "../interfaces/Scansint";


export class Scans implements Scansint {
    page: Page;
    uploadupperscan: Locator;
    uploadlowerscan: Locator;
    back: Locator;
    cancel: Locator;
    next: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uploadupperscan = page.getByTestId('upperInput');
        this.uploadlowerscan = page.getByTestId('lowerInput');
        this.next = page.getByRole('button', { name: 'Next' });

    }


    async uploadUpperScan(): Promise<void> {
        //await this.uploadupperscan.setInputFiles('images/arch_u.stl');
        await this.page.waitForTimeout(20000);
        //await this.page.setInputFiles("//input[contains(@data-testid, 'upperInput')]", 'C:/Users/Windows/Desktop/Copa/Colgate_Alingner/images/arch_u.stl');
        await this.page.setInputFiles("//input[contains(@data-testid, 'upperInput')]", 'images/arch_u.stl');
        await this.page.waitForTimeout(8000);

    }
    async uploadLowerScan(): Promise<void> {
        await this.page.setInputFiles("//input[contains(@data-testid, 'lowerInput')]", 'images/arch_l.stl');
        //await this.page.setInputFiles("//input[contains(@data-testid, 'lowerInput')]", 'C:/Users/Windows/Desktop/Copa/Colgate_Alingner/images/arch_l.stl');
        await this.page.waitForTimeout(39000);

    }
    async moveback(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async moveNext(): Promise<void> {
        await this.page.waitForSelector("//button[contains(text(),'Next')]");
        await this.next.press('Enter');
    }
    async clickCancel(): Promise<void> {
        throw new Error("Method not implemented.");
    }


}