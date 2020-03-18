"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
var user_1 = __importDefault(require("@domain/user"));
describe('makeUser', function () {
    it('throws error if invalid payload', function () {
        var errorMessage = [
            'must have names as string',
            'email must be a email',
            'phone number must be a string',
            'admin must be a boolean'
        ].join('\n');
        var user = {
            id: undefined,
            names: 'Vincent Peter',
            email: 'dev4vin@gmail.com',
            phone_number: '0700000000',
            admin: true
        };
        expect(function () {
            user_1.default(user);
        }).to.throw(errorMessage);
    });
    it('must have name', function () {
        var user = user_1.default({
            names: 'howie', id: undefined, email: "", phone_number: "", admin: false
        });
        var input = user.names;
        var actual = 'howie';
        expect(input).to.equal(actual);
    });
});
//# sourceMappingURL=spec.js.map