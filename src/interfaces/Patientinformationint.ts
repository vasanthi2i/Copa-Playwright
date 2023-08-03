import { Locator, Page } from "playwright";



export interface Patientinformationint {


    enterFirstName(fname: String): void;
    enterLastName(lname: String): void;
    enterDob(mm: String, dd: String, yy: String): void;
    clickTCCheckBox(): void;
    enterPhonenumber(phnumber: String): void;
    moveback(): void;
    moveNext(): void;
    clickCancel(): void;
    enterPatientinformation(fname: String, lname: String, mm: String, dd: String, yy: String, emailval: string, phnumber?: String): void;



}
