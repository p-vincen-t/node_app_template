"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __importDefault(require("@domain/validator"));
exports.VALIDATOR_SCENARIOS = {
    CREATE_USER: 'createUser'
};
var UserValidator = (function () {
    function UserValidator() {
    }
    UserValidator.prototype.validate = function (_object, scenario) {
        switch (scenario) {
            case exports.VALIDATOR_SCENARIOS.CREATE_USER: {
                return { error: undefined };
            }
        }
        return { error: 'cant validate user' };
    };
    return UserValidator;
}());
var makeUser = validator_1.default(new UserValidator());
exports.default = makeUser;
//# sourceMappingURL=index.js.map