import { Locator, Page } from "playwright";



export interface Orderint {
    addToCart(): void;
    selectConsent(string): void;
    placeOrder(): void;
    clickClose(): void;

}
