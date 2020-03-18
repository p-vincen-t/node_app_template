export declare type UserType = {
    id: string | undefined;
    names: string;
    email: string;
    phone_number: string;
    admin: boolean;
};
declare const makeUser: (t: UserType) => UserType;
export default makeUser;
