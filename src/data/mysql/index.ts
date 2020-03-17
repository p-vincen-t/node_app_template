import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "@data/mysql/user";

export default createConnection({
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