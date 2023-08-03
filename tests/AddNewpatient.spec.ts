import {  expect, test } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { Patients } from "../src/pages/Patients";
import { Patientinformation } from "../src/pages/Patientinformation";
import { Clinicalinformation } from "../src/pages/Clinicalinformation";
import { Scans } from "../src/pages/Scans";
import { RadiographandPhoto } from "../src/pages/RadiographandPhoto";
import { TreatandPreparePlan } from "../src/pages/TreatandPreparePlan"
import { OrderPage } from "../src/pages/OrderPage";
import { TestUtils } from "../src/utils/TestUtils";



test("Verify New Patient Treatment Plan Creation and Order Confirmation ", async ({ page, request }, testResult) => {

  test.setTimeout(1500000);
  await TestUtils.launchUrl("https://qa.colgatesmiledesign.com/#/login", page);
  //await page.goto("https://qa.colgatesmiledesign.com/#/login");
  const pages: any[] = [];
  pages.push(new LoginPage(page), new Patients(page), new Patientinformation(page), new Clinicalinformation(page), new Scans(page), new RadiographandPhoto(page), new TreatandPreparePlan(page), new OrderPage(page));
  const [login_page, Patients_page, Patientsinformation_page, Clinicalinfo_page, Scan_page, RadioandPhoto_page, TreatandPreparePlan_page, Order_page] = pages;

  //copa url
  //Login Page is created
  await login_page.enterEmailPassWordandLogin("ttvcopa1@mailinator.com", "Copa12#");
  TestUtils.log("Login Page", "Logged-in Successfully");

  //Patients Page
  await Patients_page.addNewPatient();
  TestUtils.log("New Patients-Page", "Add PatientData Button Clicked");

  //Patients Information Page
  await Patientsinformation_page.enterPatientinformation("Test", "DemoPatient", "1", "1", "1990", "TestpatientDemo@gmail.com");
  TestUtils.log("Patients Information Page", "Patient Data Added Successfully");

  //Clinical Information Page
  await Clinicalinfo_page.enterNo();
  await Clinicalinfo_page.moveNext();
  TestUtils.log("Clinical Information Page", "Clinincal-Information Selected Successfully");

  //Scan Page
  await TestUtils.waitforLoad(page);
  await Scan_page.uploadUpperScan();
  await TestUtils.waitforLoad(page);
  await Scan_page.uploadLowerScan();
  await TestUtils.waitforLoad(page);
  TestUtils.log("Scan Page(Title)", await page.title());
  TestUtils.expectPageTitleToBe(page,"Visualization Toolkit - SDL2OpenGL #");
  await Scan_page.moveNext();
  TestUtils.log("Scan Page", "Scan Files Uploaded Successfully");

  //RadioPhoto Page
  await RadioandPhoto_page.uploadPanorex();
  await TestUtils.waitforLoad(page);
  await RadioandPhoto_page.moveNext();
  TestUtils.log("RadioPhoto Page", "Radigraphs Files Uploaded Successfully");

  //TreatmentPlan and Prep Page
  await TestUtils.waitForTimeout(page, 15000);
  await TreatandPreparePlan_page.clickViewresults();
  TestUtils.log("TreatmentPlan and Prep Page", "Treatment Plan Generated Successfully");

  //Order Page
  await Order_page.addToCart();
  await TestUtils.waitforLoad(page);
  await Order_page.selectConsent('all');
  await Order_page.placeOrder();
  await TestUtils.waitforLoad(page);
  TestUtils.log("Order Page", "Order Successfully created With Order Id:" + await TestUtils.getOrderid(page.url()));
  await Order_page.clickClose();

});



