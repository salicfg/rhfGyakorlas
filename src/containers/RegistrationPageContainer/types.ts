import {Gender} from "../../common/types.ts";

export type RegistrationFormValues = {
    firstName: string;
    lastName: string;
    age: number;
    gender: Gender;
    accept: boolean;
}

export const registrationDefaultValues: RegistrationFormValues = {
    firstName: '',
    lastName: '',
    age: 0,
    gender: 'F',
    accept: false,
}

