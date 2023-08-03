import { Locator, Page } from "@playwright/test";
import { Radiographandphotoint } from "../interfaces/Radiographandphotoint";


export class RadiographandPhoto implements Radiographandphotoint {
    page: Page;
    uploadupperscan: Locator;
    uploadlowerscan: Locator;
    panorex: Locator;
    fullface: Locator;
    Retractedsmile: Locator;
    next: Locator;

    constructor(page: Page) {
        this.page = page;
        this.panorex = page.getByTestId('box-panorex').getByRole('button', { name: 'upload file' });
        this.fullface = page.getByTestId('box-fullface').getByRole('button', { name: 'upload file' });
        this.Retractedsmile = page.getByRole('button', { name: 'upload file' });
        this.next = page.getByRole('button', { name: 'Next' });

    }

    async uploadPanorex(): Promise<void> {

        const [fileChooser] = await Promise.all([
            // It is important to call waitForEvent before click to set up waiting.
            this.page.waitForEvent('filechooser'),
            // Opens the file chooser.
            await this.page.locator("(//button[contains(text(),'upload file')])[1]").click(),
        ])
        await fileChooser.setFiles([
            'images/Xray1.jpg'
        ]);

        await this.page.waitForTimeout(30000);

    }
    async uploadFullFace(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async uploadRetractedSmile(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async moveback(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async moveNext(): Promise<void> {
        await this.next.click();


    }
    async clickCancel(): Promise<void> {
        throw new Error("Method not implemented.");
    }



}