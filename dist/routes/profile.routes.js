"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var profile_controller_1 = __importDefault(require("../controllers/profile.controller"));
var router = express_1.Router();
router.route('/').post(profile_controller_1.default.createProfile);
exports.default = router;
