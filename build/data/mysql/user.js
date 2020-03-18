"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("@domain/user"));
var serializer_1 = __importDefault(require("@data/serializer"));
var typeorm_1 = require("typeorm");
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Object)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "names", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "phone_number", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], User.prototype, "admin", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}(typeorm_1.BaseEntity));
exports.User = User;
var userSerializer = serializer_1.default(function (user) {
    return {
        id: user.id === undefined ? "0" : user.id.toString(),
        names: user.names,
        email: user.email,
        phone_number: user.phone_number,
        admin: user.admin
    };
});
var userDeserializer = serializer_1.default(function (user) {
    var passedUser = user_1.default(user);
    var newUser = new User();
    newUser.id = undefined;
    newUser.names = passedUser.names;
    newUser.email = passedUser.email;
    newUser.phone_number = passedUser.phone_number;
    newUser.admin = passedUser.admin;
    return newUser;
});
var MysqlUserDatabase = (function () {
    function MysqlUserDatabase() {
    }
    MysqlUserDatabase.prototype.deleteUser = function (id) {
        return new Promise(function (resolve, reject) {
            return User.delete(id)
                .then(function (_) { return resolve(true); })
                .catch(function (err) { return reject(err); });
        });
    };
    MysqlUserDatabase.prototype.deleteAllUsers = function () {
        return new Promise(function (resolve, reject) {
            User.clear().then(function (_) { return resolve(true); })
                .catch(function (err) { return reject(err); });
        });
    };
    MysqlUserDatabase.prototype.addUser = function (user) {
        return new Promise(function (resolve, reject) {
            userDeserializer(user).save()
                .then(function (u) { return resolve(userSerializer(u)); })
                .catch(function (err) { return reject(err); });
        });
    };
    MysqlUserDatabase.prototype.findUser = function (prop, val) {
        return new Promise(function (resolve, reject) {
            var _a;
            if (prop === 'id') {
                prop = '_id';
            }
            User.find((_a = {}, _a[prop] = val, _a))
                .then(function (resp) {
                resolve(userSerializer(resp[0]));
            }).catch(function (err) { return reject(err); });
        });
    };
    MysqlUserDatabase.prototype.findUsers = function () {
        return new Promise(function (resolve, reject) {
            User.find({})
                .then(function (data) { return resolve(userSerializer(data)); })
                .catch(function (err) { return reject(err); });
        });
    };
    return MysqlUserDatabase;
}());
exports.default = MysqlUserDatabase;
//# sourceMappingURL=user.js.map