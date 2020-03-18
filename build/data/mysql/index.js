"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var user_1 = __importStar(require("@data/mysql/user"));
var typeorm_1 = require("typeorm");
typeorm_1.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "test",
    entities: [
        user_1.User
    ],
    synchronize: true,
    logging: false
}).catch(function (error) { return console.log(error); });
exports.userDatabase = new user_1.default();
//# sourceMappingURL=index.js.map