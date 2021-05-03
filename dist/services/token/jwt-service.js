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
    JWTService.prototype.setJwtTokenInCookie = function (payload, res) {
        var token = this.generateToken(payload);
        cookie_service_1.default.setCookie(app_cookies_1.AppCookie.JWT, token, res);
    };
    return JWTService;
}());
exports.default = new JWTService();
