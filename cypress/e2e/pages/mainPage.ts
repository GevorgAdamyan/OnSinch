import { SelectorObject } from "../../support/types";
import BasePage from "./basePage";

let selectors: SelectorObject = {
    menuToggle: 'div.menu-toggler-container',
    rightMenu: 'ul.page-sidebar-menu',
    pageTitle: '.page-title',
    tables: '.dashboard-tables',
    leftMenu: 'div.top-menu',
    searchContainer: '.toolbar-search-container',
    profilesDropdown: 'div.top-menu > ul > li:nth-child(1)',
    workerContent: 'div.MuiCard-root',
    superAdminPageTitle: '.page-content > h3',
    superAdminPageContent: '.page-content > h3'
}

export default class MainPage extends BasePage {
    checkElementsVisibility(): void {
        let selectorsToExclude = ['workerContent', 'superAdminPageTitle', 'superAdminPageContent'];
        let selectorsToBeChecked = this.getSelectorsToBeChecked(selectors, selectorsToExclude);
        this.getElemenstByArrayAndCheckVisibility(selectorsToBeChecked);
    }

    selectProfile(profile: string): void {
        this.clickOnElement(selectors.profilesDropdown);
        this.clickOnElement(`${selectors.profilesDropdown} a:contains("${profile}")`);
    }

    getWorkersPageContent(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(selectors.workerContent);
    }

    getSuperAdminPageTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(selectors.superAdminPageTitle);
    }

    getSuperAdminPageContent(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(selectors.superAdminPageContent);
    }
}
