import "reflect-metadata";
import MysqlUserDatabase, { User } from '@data/mysql/user';
import { createConnection } from "typeorm";

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "test",
    entities: [
        User
    ],
    synchronize: true,
    logging: false
}).catch(error => console.log(error));


export const userDatabase = new MysqlUserDatabase()
