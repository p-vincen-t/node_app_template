"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("@data/index");
var express_1 = require("express");
var router = express_1.Router();
router.get('/users', function (_, res, next) {
    index_1.userDatabase.findUsers().then(function (users) {
        res.status(200).send({
            payload: users
        });
    }).catch(function (err) { return next(err); });
});
exports.default = router;
//# sourceMappingURL=router.js.map