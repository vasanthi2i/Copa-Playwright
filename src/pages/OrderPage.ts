import { Locator, Page, expect } from "@playwright/test";
import { Orderint } from "../interfaces/Orderint";


export class OrderPage implements Orderint {
    page: Page;
    addcart: Locator;
    consent: Locator;
    placeorder: Locator;
    close: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addcart = page.getByTestId('goToCart');
        this.placeorder = page.getByRole('button', { name: 'Place order' });
        this.close = page.getByRole('button', { name: 'Close' });


    }
    async addToCart(): Promise<void> {
        await this.addcart.click();

    }
    async selectConsent(value: string): Promise<void> {

        if (value == 'all') {
            await this.page.getByTestId('consent1').getByRole('checkbox', { name: 'controlled' }).check();
            await this.page.getByTestId('consent2').getByRole('checkbox', { name: 'controlled' }).check();
            await this.page.getByTestId('consent3').getByRole('checkbox', { name: 'controlled' }).check();
            await this.page.getByTestId('consent4').getByRole('checkbox', { name: 'controlled' }).check();
        }


    }
    async placeOrder(): Promise<void> {
        await this.placeorder.click();

    }
    async clickClose(): Promise<void> {
        expect(await this.close.isVisible()).toBe(true);
        await this.close.click();

    }





}