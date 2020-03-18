"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serializer = function (_serializeSingle) {
    return function (data) {
        if (!data) {
            return null;
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingle);
        }
        return _serializeSingle(data);
    };
};
exports.default = serializer;
//# sourceMappingURL=serializer.js.map