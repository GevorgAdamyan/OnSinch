import * as App from '../pages/application';
import { Admin } from '../../support/users'
import * as data from '../../support/data'

let elementText: string;

describe('Test Login Feature', () => {
    beforeEach(() => {
        cy.visit('/');
        App.loginPage.doLogin(Admin);
    }),
    
    data.profiles.forEach(profile => {
        it(`should try to login with ${profile} profile`, () => {
            App.mainPage.selectProfile(profile);
            switch (profile) {
                case data.profiles[0]:
                    App.mainPage.checkUrl(data.paths.workerPage);
                    App.mainPage.getWorkersPageContent().each(el => {
                    expect(el).to.be.visible;
                    })
                    break;
                case data.profiles[0]:
                    App.mainPage.checkUrl(data.paths.superAdminPage);
                    App.mainPage.getSuperAdminPageTitle().then(el => {
                        elementText = el.text();
                        expect(el).to.be.visible;
                        expect(elementText).to.contain(data.elementTexts.superAdminPage.title);
                    });
                    App.mainPage.getSuperAdminPageContent().then(el => {
                        elementText = el.text();
                        expect(el).to.be.visible;
                        expect(elementText).to.contain(data.elementTexts.superAdminPage.content);
                    });
                    break;
                default:
                    break;
            }

        })
    })
})
