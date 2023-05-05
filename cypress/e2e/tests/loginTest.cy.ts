import * as App from '../pages/application';
import { Admin, users } from '../../support/users'
import * as data from '../../support/data'

let errorMessage: string;

describe('Test Login Feature', () => {
    beforeEach(() => {
        cy.visit('/');
    }),

    users.forEach(user => {
        it(`should try to login with ${user.name}`, () => {
            App.loginPage.checkElementsVisibility();
            App.loginPage.doLogin(user);
            if (user.name === Admin.name) {
                App.mainPage.checkElementsVisibility();
                App.mainPage.checkUrl(data.paths.mainPage);
            } else {
                App.loginPage.getAlertMessage().then(el => {
                    errorMessage = el.text();
                    expect(el).to.be.visible;
                    expect(errorMessage).to.contain(data.alertMessages.wrongCredential);
                })
            }
        })
    })
})
