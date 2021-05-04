"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var typeorm_1 = require("typeorm");
var user_1 = require("../model/entity/user");
var class_validator_1 = require("class-validator");
//importando perfil para sacar el rol
var profile_1 = require("../model/entity/profile");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var userRespository, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userRespository = typeorm_1.getRepository(user_1.User);
                    return [4 /*yield*/, userRespository.find()];
                case 1:
                    users = _a.sent();
                    if (users.length > 0) {
                        res.send(users); //un 200 -300
                    }
                    else {
                        res.status(404).json({ message: 'Not result' });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    UserController.getById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, userRespository, user, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    userRespository = typeorm_1.getRepository(user_1.User);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRespository.findOneOrFail(id)];
                case 2:
                    user = _a.sent();
                    res.send(user);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    res.status(404).json({ message: 'Not found' });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    UserController.newUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, username, password, _b, first_name, last_name, email, user, userN, profile, errors, userRespository, userRespository_p, e_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = req.body, username = _a.username, password = _a.password;
                    _b = req.body, first_name = _b.first_name, last_name = _b.last_name, email = _b.email, user = _b.user;
                    userN = new user_1.User();
                    profile = new profile_1.Profile();
                    userN.username = username;
                    userN.password = password;
                    //user.profiles = profiles;}
                    profile.firstName = first_name;
                    profile.lastName = last_name;
                    profile.email = email;
                    profile.user = user;
                    return [4 /*yield*/, class_validator_1.validate(user)];
                case 1:
                    errors = _c.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    userRespository = typeorm_1.getRepository(user_1.User);
                    userRespository_p = typeorm_1.getRepository(profile_1.Profile);
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, userRespository.save(user)];
                case 3:
                    _c.sent();
                    //probando
                    return [4 /*yield*/, userRespository_p.save(profile)];
                case 4:
                    //probando
                    _c.sent();
                    return [3 /*break*/, 6];
                case 5:
                    e_2 = _c.sent();
                    return [2 /*return*/, res.status(404).json({ message: 'username alredy exist' })];
                case 6:
                    res.send('User created');
                    return [2 /*return*/];
            }
        });
    }); };
    UserController.editUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var user, profile, id, user_id, username, _a, first_name, last_name, email, role, userRespository, profileRepository, e_3, errors, e_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.params.id;
                    user_id = req.params.user_id;
                    username = req.body.username;
                    _a = req.body, first_name = _a.first_name, last_name = _a.last_name, email = _a.email, role = _a.role;
                    userRespository = typeorm_1.getRepository(user_1.User);
                    profileRepository = typeorm_1.getRepository(profile_1.Profile);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, userRespository.findOneOrFail(id)];
                case 2:
                    user = _b.sent();
                    return [4 /*yield*/, profileRepository.findOneOrFail(user_id)];
                case 3:
                    profile = _b.sent();
                    user.username = username;
                    profile.firstName = first_name;
                    profile.lastName = last_name;
                    profile.email = email;
                    profile.role = role;
                    return [3 /*break*/, 5];
                case 4:
                    e_3 = _b.sent();
                    return [2 /*return*/, res.status(400).json({ message: 'User not found' })];
                case 5: return [4 /*yield*/, class_validator_1.validate(user)];
                case 6:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    _b.label = 7;
                case 7:
                    _b.trys.push([7, 10, , 11]);
                    return [4 /*yield*/, userRespository.save(user)];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, profileRepository.save(profile)];
                case 9:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 10:
                    e_4 = _b.sent();
                    return [2 /*return*/, res.status(409).json({ message: 'Username already in use' })];
                case 11:
                    res.status(201).json({ message: 'User update' });
                    return [2 /*return*/];
            }
        });
    }); };
    UserController.deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, userRespository, user, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    userRespository = typeorm_1.getRepository(user_1.User);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRespository.findOneOrFail(id)];
                case 2:
                    user = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_5 = _a.sent();
                    return [2 /*return*/, res.status(404).json({ messsage: 'User not found' })];
                case 4:
                    //User removed
                    userRespository.delete(id);
                    res.status(201).json({ message: 'User deleted' });
                    return [2 /*return*/];
            }
        });
    }); };
    return UserController;
}());
exports.UserController = UserController;
exports.default = UserController;
