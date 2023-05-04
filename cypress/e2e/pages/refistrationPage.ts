import { SelectorObject, User } from "../../support/types";
import BasePage from "./basePage";

let selectors: SelectorObject = {
    pageLogo: '.login-logo',
    firstNameField: '#WorkerName',
    surenameField: '#WorkerSurname',
    emailField: '#WorkerEmail',
    passwordField: '#WorkerPassword',
    repeatPasswordField: '#WorkerPasswordConfirm',
    dobField: '#WorkerBirthdate',
    phoneField: '#WorkerPhone',
    genderField: '#WorkerinfoSex',
    termsAndConditionChkbx: '#uniform-WorkerApproveTerms',
    personalDataChkbx: '#WorkerApprovePrivacy',
    captchaBox: '[style="width: 304px; height: 78px;"] > div > iframe',
    signUpBtn: 'input[value="Sign up"]'
}

export default class RegistrationPage extends BasePage {
    checkElementsVisibility(): void {
        let selectorsToExclude = ['personalDataChkbx', 'captchaBox']
        let selectorsToBeChecked = this.getSelectorsToBeChecked(selectors, selectorsToExclude);
        this.getElemenstByArrayAndCheckVisibility(selectorsToBeChecked);
    }

    private selectGender(gender: string): void {
        cy.get(selectors.genderField).select(gender);
    }

    fillRegistrationForm(user: User): void {
        this.typeText(selectors.firstNameField, user.firstName, true);
        this.typeText(selectors.surenameField, user.surname, true);
        this.typeText(selectors.emailField, user.email, true);
        this.typeText(selectors.passwordField, user.password, true);
        this.typeText(selectors.repeatPasswordField, user.password, true);
        this.typeText(selectors.dobField, user.dob, true);
        this.typeText(selectors.phoneField, user.phoneNumber, true);
        this.selectGender(user.gender);
        this.clickOnElement(selectors.termsAndConditionChkbx);
        this.clickOnElement(selectors.personalDataChkbx);
        this.clickOnElement(selectors.captchaBox, true);
        this.clickOnElement(selectors.signUpBtn);
    }
}