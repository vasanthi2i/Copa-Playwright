import { Page } from "@playwright/test";
import { test,expect } from "@playwright/test";
import logger from "../utils/logger";
export class TestUtils {

  static async launchUrl(url, page:Page): Promise<void>
  {
    await page.goto(url);
    console.log(url);
  }
  static async getOrderid(url: string): Promise<string> {
    const parts = url.split("/");
    const value = parts[parts.length - 1];
    return value;
  }

  static async log(header: string, message: string): Promise<void> {
    logger.info(+header + ":" + message);
    test.info().annotations.push({ type: header, description: message });
  }

  static async waitforLoad(page: Page): Promise<void> {
    await page.waitForLoadState("domcontentloaded");
    await page.waitForLoadState("networkidle");
    await page.waitForLoadState();
  }

  static async waitForTimeout(page: Page, val: number): Promise<void> {
    await page.waitForTimeout(val);
  }

  static async getTitle(page: Page): Promise<string> {
    return await page.title();
  }

  static async expectPageTitleToBe(page: Page, expectedtitle:string): Promise<void> {
      expect(await page.title()).toBe(expectedtitle);
  }

  static async getUrlOfThePage(page: Page): Promise<string>{
    return page.url();
  }


}