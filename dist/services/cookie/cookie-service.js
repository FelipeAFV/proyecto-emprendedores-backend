"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    CookieService.prototype.setCookie = function (key, value, res) {
        res.cookie(key, value, { httpOnly: true });
    };
    CookieService.prototype.getCookie = function (key, req) {
        return req.cookies[key.valueOf()];
    };
    return CookieService;
}());
exports.default = new CookieService();
