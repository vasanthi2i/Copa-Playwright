import { expect, test } from "@playwright/test";
import { csvfilereader } from "../src/utils/csvfilereader";
import { LoginPage } from "../src/pages/LoginPage";
import { Clinicalinformation } from "../src/pages/Clinicalinformation";
import { OrderPage } from "../src/pages/OrderPage";
import { Patientinformation } from "../src/pages/Patientinformation";
import { Patients } from "../src/pages/Patients";
import { RadiographandPhoto } from "../src/pages/RadiographandPhoto";
import { Scans } from "../src/pages/Scans";
import { TreatandPreparePlan } from "../src/pages/TreatandPreparePlan";
import { PatientOverviewPage } from "../src/pages/PatientOverviewPage";
import { TestUtils } from "../src/utils/TestUtils";

const csvfile = new csvfilereader();
const csvdata = csvfile.filereader('COPA_patient_info_input.csv');

csvdata.then((element) => {
    element.forEach((res) => {
        test(`Demographic information of ${res.Last_name} :`, async ({ page }) => {
            test.setTimeout(1500000);

            const pages: any[] = [];
            pages.push(new LoginPage(page), new Patients(page), new Patientinformation(page), new Clinicalinformation(page), new Scans(page), new RadiographandPhoto(page), new TreatandPreparePlan(page), new OrderPage(page), new PatientOverviewPage(page));
            const [login_page, Patients_page, Patientsinformation_page, Clinicalinfo_page, Scan_page, RadioandPhoto_page, TreatandPreparePlan_page, Order_page,PatientOverview_page] = pages;

            //Launch the url
            await TestUtils.launchUrl(process.env.ENV_URL, page);

            //Enter email and pwd to login
            console.log(process.env.UNAME);
            await login_page.enterEmailPassWordandLogin(process.env.UNAME, process.env.PASSWORD);
            TestUtils.log("Login Page", "Logged-in Successfully");

            //Patients Page
            await Patients_page.addNewPatient();
            TestUtils.log("New Patients-Page", "Add PatientData Button Clicked");

            //Patients Information Page
            await Patientsinformation_page.enterPatientinformation(res.First_name, res.Last_name, res.MM, res.DD, res.YYYY, res.Email);
            TestUtils.log("Patients Information Page", "Patient Data Added Successfully");
            console.log("\n Demographic information of  # Patient is \n First name :" + res.First_name + "\t" + "Last name :" + res.Last_name + "\t"
                + "Date of birth :" + res.MM + "/" + res.DD + "/" + res.YYYY + "\t" + "Email:" + res.Email);

            //Clinical Information Page
            await Clinicalinfo_page.enterNo();
            //await Clinicalinfo_page.moveNext();
            await Clinicalinfo_page.clickCancel();

            const isPopupVisible = await TestUtils.saveforLaterpopup(page, await Clinicalinfo_page.returnSaveForLaterPopupLocator());
            //console.log(isPopupVisible);
            await TestUtils.clickSaveAndCloseButton(page, await Clinicalinfo_page.returnSaveAndCloseLocator());
        
            TestUtils.log("Clinical Information Page", "Save for later popup appeared");

            //const patname = await PatientOverview_page.getPatientname(page, res.First_name+" "+res.Last_name);
            // console.log(patname);
            await expect(page.getByText(res.First_name+" "+res.Last_name)).toBeVisible();

            //Select 'Yes,save and close' in Save for later popup
            }

)
    }
)})