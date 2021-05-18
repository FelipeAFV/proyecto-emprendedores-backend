"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_service_1 = __importDefault(require("../services/token/jwt-service"));
var payload_check = function (req, res, next) {
    var payload = jwt_service_1.default.getJwtPayloadInCookie(req);
    if (!payload) {
        res.status(400).json({ error: 'Token Not provided or expired' });
    }
    else {
        console.log('Usuario autenticado');
        req.payload = payload;
        next();
    }
};
exports.default = payload_check;
