"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
var router = express_1.Router();
exports.router = router;
router.get("/", auth_controller_1.default.controllertest);
// router.post("/signIn", authController.signIn)
router.post("/signUp", auth_controller_1.default.signUp);
