import { SelectorObject } from "../../support/types";
import BasePage from "./basePage";

let selectors: SelectorObject = {
    changePasswordBtn: '[href="/react/profile/personal#/passwordUpdate"]',
    currentPassField: '[name="current"]',
    newPasswordField: '[name="next"]',
    confirmPassField: '[name="confirm"]',
    confirmPassChangeBtn: 'Change Password',
    passwordChangeSuccess: '#notistack-snackbar',
    emailField: '#email > div > span'
}

export default class WorkerProfilePage extends BasePage {
    checkElementsVisibility(): void {
        let selectorsToExclude = ['personalDataChkbx', 'captchaBox']
        let selectorsToBeChecked = this.getSelectorsToBeChecked(selectors, selectorsToExclude);
        this.getElemenstByArrayAndCheckVisibility(selectorsToBeChecked);
    }

    getPasswordChangeSuccessMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(selectors.passwordChangeSuccess);
    }

    getEmailField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(selectors.emailField);
    }

    changePassword(oldPassword: string, newPassword: string): void {
        this.clickOnElement(selectors.changePasswordBtn);
        this.typeText(selectors.currentPassField, oldPassword);
        this.typeText(selectors.newPasswordField, newPassword);
        this.typeText(selectors.confirmPassField, newPassword);
        this.clickOnElement(`button:contains("${selectors.confirmPassChangeBtn}")`);
    }

}
