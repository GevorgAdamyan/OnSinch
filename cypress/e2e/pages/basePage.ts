import { SelectorObject } from "../../support/types";

export default abstract class BasePage {
    protected typeText(selector: string, text: string | number, force?: boolean): void {
        if (typeof text === 'number') {
            text = text.toString();
        }

        if (force) {
            cy.get(selector).click({force: force}).type(text)
        } else {
            cy.get(selector).click().type(text)
        }
    }

    protected clearAndTypeText(selector: string, text: string | number): void {
        if (typeof text === 'number') {
            text = '' + text;
        }
        cy.get(selector).click().clear().type(text)
    }

    protected getElemenstByArrayAndCheckVisibility(selectors: string[]): void {
        selectors.forEach(selector => {
            cy.get(selector).should('be.visible')
        })
    }

    protected clickOnElement(selector: string, force?: boolean): void {
        if (force) {
            cy.get(selector).click({ force: force })
        } else {
            cy.get(selector).click()
        }
    }

    abstract checkElementsVisibility(): void;

    checkUrl(path: string): void {
        cy.url().should('include', path)
    }

    protected getSelectorsToBeChecked(selectors: SelectorObject, selectorsToExclude?: string | string[]): string[] {
        const selectorsToBeChecked: string[] = [];
        if (selectorsToExclude) {
            const excludeArray = Array.isArray(selectorsToExclude) ? selectorsToExclude : [selectorsToExclude];
            Object.keys(selectors).forEach(key => {
                if (!excludeArray.some(selector => selector === key)) {
                    selectorsToBeChecked.push(selectors[key]);
                }
            });
        } else {
            Object.values(selectors).forEach(selector => selectorsToBeChecked.push(selector));
        }

        return selectorsToBeChecked;
    }
}
