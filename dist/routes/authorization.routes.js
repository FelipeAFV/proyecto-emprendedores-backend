"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authorization_controller_1 = __importDefault(require("../controllers/authorization.controller"));
var router = express_1.Router();
router.post('/isStoreOwner', authorization_controller_1.default.isStoreOwner);
exports.default = router;
