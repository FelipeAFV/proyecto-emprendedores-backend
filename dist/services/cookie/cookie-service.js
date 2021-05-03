"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    CookieService.prototype.setCookie = function (key, value, res) {
        res.cookie(key, value, { httpOnly: true });
    };
    return CookieService;
}());
exports.default = new CookieService();
