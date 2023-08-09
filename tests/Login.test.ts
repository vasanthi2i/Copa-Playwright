import { expect, test } from "@playwright/test";
import { TestUtils } from "../src/utils/TestUtils";
import { LoginPage } from "../src/pages/LoginPage";
import { Patients } from "../src/pages/Patients";
import { Patientinformation } from "../src/pages/Patientinformation";
import { Clinicalinformation } from "../src/pages/Clinicalinformation";
import { Scans } from "../src/pages/Scans";
import { RadiographandPhoto } from "../src/pages/RadiographandPhoto";
import { TreatandPreparePlan } from "../src/pages/TreatandPreparePlan";
import { OrderPage } from "../src/pages/OrderPage";
import {Logout} from "../src/pages/Logout";


test("Verify login is successful with valid credentials", async function ({page,request},testResult) {
    
    test.setTimeout(1500000);
    const pages: any[] = [];
    pages.push(new LoginPage(page), new Patients(page), new Patientinformation(page), new Clinicalinformation(page), new Scans(page), new RadiographandPhoto(page), new TreatandPreparePlan(page), new OrderPage(page), new Logout(page));
    const [login_page, Patients_page, Patientsinformation_page, Clinicalinfo_page, Scan_page, RadioandPhoto_page, TreatandPreparePlan_page, Order_page, Logout_page] = pages;

    //Launch the url fetched from env file
    await TestUtils.launchUrl(process.env.COPA_ENV_URL, page);

    //Login page is navigated
    await login_page.enterEmailPassWordandLogin(process.env.UNAME, process.env.PASSWORD);
    TestUtils.log("Login Page", "Logged-in Successfully");
     
    TestUtils.log("Home page", " Navigated to home page");

     //Get the url of the current page 
     if(process.env.ENV==='qa')
     {
     page.waitForURL("https://qa.colgatesmiledesign.com/#/patients");
     await Logout_page.clickMyAccount();
     await expect(page).toHaveURL("https://qa.colgatesmiledesign.com/#/patients");
     TestUtils.log("Url of current page", await TestUtils.getUrlOfThePage(page));
     await Logout_page.clickLogout();
     TestUtils.log("Logout","Logged-out successfully from qa env");
     }
     else
     {
     page.waitForURL("https://dev.colgatesmiledesign.com/#/patients");
     await Logout_page.clickMyAccount();
     await expect(page).toHaveURL("https://dev.colgatesmiledesign.com/#/patients");
     TestUtils.log("Url of current page", await TestUtils.getUrlOfThePage(page));
     await Logout_page.clickLogout();
     TestUtils.log("Logout","Logged-out successfully from dev env");
     }
})