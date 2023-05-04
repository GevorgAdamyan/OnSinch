import { SelectorObject } from "../../support/types";
import BasePage from "./basePage";

let selectors: SelectorObject = {
    menuToggle: 'div.menu-toggler-container',
    rightMenu: 'ul.page-sidebar-menu',
    pageTitle: '.page-title',
    tables: '.dashboard-tables',
    leftMenu: 'div.top-menu',
    searchContainer: '.toolbar-search-container'
}

export default class MainPage extends BasePage {
    checkElementsVisibility(): void {
        let selectorsToBeChecked = this.getSelectorsToBeChecked(selectors);
        this.getElemenstByArrayAndCheckVisibility(selectorsToBeChecked);
    }

}
