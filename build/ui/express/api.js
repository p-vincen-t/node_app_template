"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var router_1 = __importDefault(require("@ui/router"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(router_1.default);
app.use(function (err, _, res, next) {
    if (err) {
        console.error(err.message);
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        return res.status(err.statusCode).send({
            statusCode: err.statusCode,
            message: err.message
        });
    }
    next();
});
app.use(function (_, res) {
    res.status(404).json({
        status: 'Page does not exist'
    });
});
var PORT = config.PORT || 3000;
app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
});
//# sourceMappingURL=api.js.map