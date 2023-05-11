import { Admin } from '../../support/users';
import * as App from '../pages/application';
import * as data from '../../support/data'

let elText: string;

describe('Test Change password feature', () => [
    before(() => {

    }),

    beforeEach(() => {
        cy.visit('/');
        App.loginPage.doLogin(Admin);
    }),

    after(() => {
        // App.mainPage.selectProfile(data.profiles[0]);
        // App.mainPage.openWorkerProfile();
        App.workerProfilePage.changePassword(data.dataForPassChange.newPass, data.dataForPassChange.oldPass);
    }),

    it('should sucessfully change a password', () => {
        App.mainPage.selectProfile(data.profiles[0]);
        App.mainPage.openWorkerProfile();
        App.workerProfilePage.changePassword(data.dataForPassChange.oldPass, data.dataForPassChange.newPass);
        App.workerProfilePage.getPasswordChangeSuccessMessage().then(el => {
            elText = el.text();
            expect(elText).to.contain(data.alertMessages.passwordChangeSuccess);
        });
        Admin.password = data.dataForPassChange.newPass;
        App.mainPage.doLogOut();
        App.loginPage.doLogin(Admin);
        App.workerProfilePage.getEmailField().then(el => {
            elText = el.text();
            expect(elText).to.contain(Admin.email);
        })
    })
])