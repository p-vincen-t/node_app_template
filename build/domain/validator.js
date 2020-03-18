"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildMakeObject = function (validator) {
    return function (t) {
        var error = validator.validate(t).error;
        if (error)
            throw error;
        return t;
    };
};
exports.default = buildMakeObject;
//# sourceMappingURL=validator.js.map