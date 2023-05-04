import { SelectorObject } from "../../support/types";
import BasePage from "./basePage";

let selectors: SelectorObject = {
    firstNameField: '#WorkerName',
    surenameField: '#WorkerSurname',
    emailField: '#WorkerEmail',
    passwordField: '#WorkerPassword',
    repeatPasswordField: '#WorkerPasswordConfirm',
    dobField: '#WorkerBirthdate',
    phoneField: 'WorkerPhone',
    genderField: '#WorkerinfoSex',
    termsAndConditionChkbx: '#uniform-WorkerApproveTerms',
    personalDataChkbx: '#WorkerApprovePrivacy',
    captchaBox: '#recaptcha-anchor',
    signUpBtn: 'input[value="Sign up"]'
}

export default class RegistrationPage extends BasePage {
    checkElementsVisibility(): void {
        let selectorsToBeChecked = this.getSelectorsToBeChecked(selectors);
        this.getElemenstByArrayAndCheckVisibility(selectorsToBeChecked);
    }

}