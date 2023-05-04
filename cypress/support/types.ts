export type SelectorObject = {
    [key: string]: string
};

export interface User {
    email: string,
    password: string,
    name: string,
    firstName?: string,
    surname?: string,
    phoneNumber?: string,
    gender?: string,
    dob?: string
}