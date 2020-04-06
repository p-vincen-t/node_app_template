export declare const VALIDATOR_SCENARIOS: {
    CREATE_USER: string;
};
export declare type UserType = {
    id: string | undefined;
    names: string;
    email: string;
    phone_number: string;
    admin: boolean;
};
declare const makeUser: (t: UserType, scenario: any) => UserType;
export default makeUser;
