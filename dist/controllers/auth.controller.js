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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = __importDefault(require("../services/user-service"));
var client_service_1 = __importDefault(require("../services/client-service"));
var user_1 = require("../model/entity/user");
var profile_1 = require("../model/entity/profile");
var client_1 = require("../model/entity/client");
var app_role_1 = require("../model/enums/app-role");
var bcrypt_1 = __importDefault(require("bcrypt"));
<<<<<<< HEAD
var jwt_service_1 = __importDefault(require("../services/token/jwt-service"));
=======
>>>>>>> master
var authController = /** @class */ (function () {
    function authController() {
        var _this = this;
        this.controllertest = function (req, res) {
            res.send("controller responding");
        };
        this.signUp = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user_found;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_service_1.default.getByConditions({ where: { username: req.body.username } })];
                    case 1:
                        user_found = _a.sent();
                        if (user_found) {
                            res.status(500).json({ error: "user alredy exists" });
                        }
                        else {
                            bcrypt_1.default.hash(req.body.password, 5)
                                .then(function (hash) {
                                var new_user = new user_1.User();
                                new_user.username = req.body.username;
                                new_user.password = hash;
                                return Promise.resolve(new_user);
                            })
                                .then(function (new_user) {
                                var new_profile = new profile_1.Profile();
                                new_profile.firstName = req.body.firstname;
                                new_profile.lastName = req.body.lastname;
                                new_profile.email = req.body.email;
                                new_profile.user = new_user;
                                return Promise.resolve(new_profile);
                            })
                                .then(function (new_profile) { return __awaiter(_this, void 0, void 0, function () {
                                var new_client;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            new_client = new client_1.Client();
                                            new_client.profile = new_profile;
                                            return [4 /*yield*/, client_service_1.default.create(new_client)];
                                        case 1:
                                            _a.sent();
                                            res.status(200).json({ message: "user added succesfully" });
                                            return [2 /*return*/];
                                    }
                                });
                            }); }).catch(function (error) {
                                res.status(500).json({ error: "internal server error" });
                            });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
<<<<<<< HEAD
        this.signIn = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, username, password, user, checkPass;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, username = _a.username, password = _a.password;
                        return [4 /*yield*/, user_service_1.default.getByConditions({ username: username })];
                    case 1:
                        user = _b.sent();
                        if (!user)
                            return [2 /*return*/, res.status(401).send('User not found')];
                        return [4 /*yield*/, bcrypt_1.default.compare(password, user.password)];
                    case 2:
                        checkPass = _b.sent();
                        if (!checkPass)
                            return [2 /*return*/, res.status(401).send('Incorrect password')];
                        //setting cookie
                        jwt_service_1.default.setJwtTokenInCookie({ role: app_role_1.AppRole.CLIENT }, res);
                        res.send('Cookie');
                        return [2 /*return*/];
                }
            });
        }); };
=======
        // signIn = async (req:Request, res:Response) => {
        //     const {username, password} = req.body;
        //     if(!(username && password)) {
        //         return res.status(400).json({ message: 'Username & Password are required'});
        //     } else {
        //         const user = await UserService.getByConditions({username: username});
        //         if (!user)  {
        //             return res.status(400).json({message:'User not found'});
        //         } else {
        //             const checkPassword = await bcrypt.compare(password, user.password);
        //             if (!checkPassword) {
        //                 return res.status(400).json({message : 'Password Incorrect'});
        //             } else {
        //                 const token = jwtService.setJwtInCookie();
        //                 const setCookie = CookieService.setCookie(token, "cookie", res.status(201).json({message: "setting cookie"}));
        //                 const userNoPass = {username:user.username};
        //                 return res.json(userNoPass);
        //                 }
        //             }
        //         }
        //     }
>>>>>>> master
    }
    return authController;
}());
exports.default = new authController();
