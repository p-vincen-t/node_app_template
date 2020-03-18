import { UserType } from "@domain/user";
export default interface UserDatabase {
    deleteUser(id: string): Promise<boolean>;
    deleteAllUsers(): Promise<boolean>;
    addUser(user: UserType): Promise<UserType>;
    findUsers(): Promise<UserType[]>;
    findUser(prop: string, val: any): Promise<UserType>;
}
