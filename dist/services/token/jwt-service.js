"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var app_cookies_1 = require("../../model/enums/app-cookies");
var cookie_service_1 = __importDefault(require("../cookie/cookie-service"));
var JWTService = /** @class */ (function () {
    function JWTService() {
    }
    JWTService.prototype.generateToken = function (payload) {
        // TODO: Change secret key
        return jsonwebtoken_1.default.sign(payload, 'secret', { expiresIn: '1h' });
    };
    JWTService.prototype.setJwtInCookie = function (payload, res) {
        var token = this.generateToken(payload);
        cookie_service_1.default.setCookie(app_cookies_1.AppCookie.JWT, token, res);
    };
    JWTService.prototype.getJwtPayloadInCookie = function (req) {
        var token = cookie_service_1.default.getCookie(app_cookies_1.AppCookie.JWT, req);
        if (!token)
            return undefined;
        try {
            var userPayload = jsonwebtoken_1.default.verify(token, 'secret');
            console.log(userPayload);
            return userPayload;
        }
        catch (err) {
            console.log(err);
            return undefined;
        }
    };
    return JWTService;
}());
exports.default = new JWTService();
