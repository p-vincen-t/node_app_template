"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var validator_1 = __importDefault(require("@domain/validator"));
var makeUser = validator_1.default(joi_1.default.object().keys({
    names: joi_1.default.string().required().error(function () { return 'must have names as string'; }),
    email: joi_1.default.string().error(function () { return 'email must be a email'; }),
    phone_number: joi_1.default.string().error(function () { return 'phone number must be a string'; }),
    admin: joi_1.default.boolean().error(function () { return 'admin must be a boolean'; })
}));
exports.default = makeUser;
//# sourceMappingURL=index.js.map