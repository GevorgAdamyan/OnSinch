import { User } from "./types";

export const Admin: User = {
    email: 'admin@myagency.com',
    password: 'adminsupport1',
    name: 'Admin user'
}

export const UserWithWrongEmail: User = {
    email: 'wrongEmail@myagency.com',
    password: 'adminsupport1',
    name: 'User with wrong email'
}

export const UserWithWrongPassword: User = {
    email: 'admin@myagency.com',
    password: 'wrongPasswprd',
    name: 'User with wrong password'
}

export const users = [Admin, UserWithWrongEmail, UserWithWrongPassword]