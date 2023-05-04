import { SelectorObject, User } from "../../support/types";
import BasePage from "./basePage";

let selectors: SelectorObject = {
    pageLogo: '.login-logo',
    pageFooter: '.login-footer',
    loginPanel: '.login-content > .row',
    emailField: '#UserEmail',
    passwordField: '#UserPassword',
    signUpBtn: 'a[href="/signup"]',
    signInBtn: 'input[value="Sign in"]',
    alertMessage: '.alert-danger'
}

export default class LoginPage extends BasePage {
    checkElementsVisibility(): void {
        let selectorsToExclude = ['alertMessage']
        let selectorsToBeChecked = this.getSelectorsToBeChecked(selectors, selectorsToExclude);
        this.getElemenstByArrayAndCheckVisibility(selectorsToBeChecked);
    }

    getAlertMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(selectors.alertMessage);
    }

    doLogin(user: User): void {
        this.typeText(selectors.emailField, user.email);
        this.typeText(selectors.passwordField, user.password);
        this.clickOnElement(selectors.signInBtn);
    }

    navigateToSignUp(): void {
        this.clickOnElement(selectors.signUpBtn);
    }
}
