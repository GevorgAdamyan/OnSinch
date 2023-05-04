import { User } from '../../support/types';
import * as App from '../pages/application';
import * as data from '../../support/data'
import { faker } from '@faker-js/faker';
import Utils from '../../support/utils'

let now: number
let email: string;
let password: string;
let name: string;
let firstName: string;
let surname: string;
let phoneNumber: string;
let gender: string;
let dob: string;
let newUser: User;

describe('Test Registration Feature', () => [
    before(() => {
        now = Date.now();
        name = `newUser${now}`
        email = `${name}.${data.emailDomain}`;
        password = faker.internet.password();
        firstName = faker.name.firstName();
        surname = faker.name.lastName();
        phoneNumber = Math.floor(Math.random() * 1000000000).toString();
        gender = Utils.getRandomElement(data.genders);
        dob = Utils.generateRandomDOB();
        
        newUser = {
            email: email,
            password: password,
            name: name,
            firstName: firstName,
            surname: surname,
            phoneNumber: phoneNumber,
            gender: gender,
            dob: dob
        }
    }),

    beforeEach(() => {
        cy.visit('/');
        App.loginPage.navigateToSignUp();
        App.registrationPage.checkElementsVisibility();
    }),

    it('should sucessfully registrate a new user', () => {
        App.registrationPage.fillRegistrationForm(newUser);
    })
])