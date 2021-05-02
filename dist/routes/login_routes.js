"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var login_controler_1 = __importDefault(require("../controllers/login_controler"));
var router = express_1.Router();
exports.router = router;
router.get("/", login_controler_1.default.controllertest);
router.post("/signup", login_controler_1.default.signup);
