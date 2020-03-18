import { UserType } from "@domain/user";
import UserDatabase from "@data/user";
import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    id: number | undefined;
    names: string;
    email: string;
    phone_number: string;
    admin: boolean;
}
export default class MysqlUserDatabase implements UserDatabase {
    deleteUser(id: string): Promise<boolean>;
    deleteAllUsers(): Promise<boolean>;
    addUser(user: UserType): Promise<UserType>;
    findUser(prop: string, val: any): Promise<any>;
    findUsers(): Promise<UserType[]>;
}
