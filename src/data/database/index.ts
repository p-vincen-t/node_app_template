import "reflect-metadata";
import MysqlUserDatabase from '@data/database/user';
// import { createConnection } from "typeorm";

// (async (entities) => {
//     await createConnection({
//         type: "sqlite",
//         database: "database.sqlite",
//         entities,
//         synchronize: true,
//         logging: true
//     }).catch(error => console.log(error));

// })([User])

export const userDatabase = new MysqlUserDatabase()
