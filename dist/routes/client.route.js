"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var client_controller_1 = __importDefault(require("../controllers/client.controller"));
var router = express_1.Router();
router.get("/favoriteStores", client_controller_1.default.getFavoritesStores);
router.put('/');
router.delete('/favoritesStores/:id', client_controller_1.default.deleteFavoriteStore);
exports.default = router;
