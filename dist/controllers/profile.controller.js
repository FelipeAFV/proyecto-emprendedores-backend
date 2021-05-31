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
var app_cookies_1 = require("../model/enums/app-cookies");
var profile_utils_1 = require("../utils/profile-utils");
var profile_service_1 = __importDefault(require("../services/profile-service"));
var jwt_service_1 = __importDefault(require("../services/token/jwt-service"));
var personservice_factory_1 = __importDefault(require("../model/factory/personservice-factory"));
var ProfileControler = /** @class */ (function () {
    function ProfileControler() {
    }
    ProfileControler.prototype.createProfile = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, role, email, firstName, lastName, currentProfile, appRoleToCreate, profileCreated, personService;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, role = _a.role, email = _a.email, firstName = _a.firstName, lastName = _a.lastName;
                        console.log(req.payload.profileId);
                        return [4 /*yield*/, profile_service_1.default.getByConditions({ where: { id: req.payload.profileId },
                                relations: ['user'] })];
                    case 1:
                        currentProfile = _b.sent();
                        console.log(currentProfile);
                        if (!currentProfile)
                            return [2 /*return*/, res.status(500).json({ message: 'Error in request prosessing' })];
                        appRoleToCreate = profile_utils_1.fromStringToAppRole(role);
                        if (!appRoleToCreate)
                            return [2 /*return*/, res.status(400).json({ message: 'Error in request' })];
                        return [4 /*yield*/, profile_service_1.default.create({ id: 0, role: appRoleToCreate, email: email, firstName: firstName, lastName: lastName, user: currentProfile.user })];
                    case 2:
                        profileCreated = _b.sent();
                        personService = personservice_factory_1.default.createPersonServiceFromRole(appRoleToCreate);
                        personService.saveDefault(profileCreated);
                        // /**Se crea la entidad asociada al perfil */
                        // if (appRoleToCreate === AppRole.STORE_MANAGER) {
                        //     storeManagerService.create({id: 0, profile: profileCreated, stores: []});
                        // } else if (appRoleToCreate === AppRole.ADMIN) {
                        //     adminService.create({id: 0, profile: profileCreated});
                        // }
                        /**Se cambian datos en cookie para operar con el nuevo perfil */
                        res.clearCookie(app_cookies_1.AppCookie.JWT);
                        jwt_service_1.default.setJwtInCookie({ role: profileCreated.role, profileId: profileCreated.id }, res);
                        return [2 /*return*/, res.status(200).json({ message: 'Profile created successfully', profile: profileCreated })];
                }
            });
        });
    };
    ProfileControler.prototype.changeProfile = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var requiredRole, currentProfile, currentUser, profileToChange;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requiredRole = profile_utils_1.fromStringToAppRole(req.body.role);
                        return [4 /*yield*/, profile_service_1.default.getByConditions({ where: { id: req.payload.profileId },
                                relations: ['user'] })];
                    case 1:
                        currentProfile = _a.sent();
                        if (!currentProfile)
                            return [2 /*return*/, res.status(500).json({ message: 'Error in request prosessing' })];
                        currentUser = currentProfile.user;
                        console.log(currentUser);
                        return [4 /*yield*/, profile_service_1.default.getByConditions({ where: { user: currentUser, role: requiredRole } })];
                    case 2:
                        profileToChange = _a.sent();
                        if (!profileToChange)
                            return [2 /*return*/, res.status(500).json({ message: 'Error no profile found that match conditions' })];
                        res.clearCookie(app_cookies_1.AppCookie.JWT);
                        jwt_service_1.default.setJwtInCookie({ role: profileToChange.role, profileId: profileToChange.id }, res);
                        return [2 /*return*/, res.status(200).json({ message: 'Profile set successfully', profile: profileToChange })];
                }
            });
        });
    };
    ProfileControler.prototype.hasProfile = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var currentProfile, currentUser, roleInProfile, foundprofile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, profile_service_1.default.getByConditions({ where: { id: req.payload.profileId },
                            relations: ['user'] })];
                    case 1:
                        currentProfile = _a.sent();
                        if (!currentProfile)
                            return [2 /*return*/, res.status(500).json({ message: 'Error in request prosessing' })];
                        currentUser = currentProfile.user;
                        console.log(currentUser);
                        roleInProfile = profile_utils_1.fromStringToAppRole(req.params.profile);
                        if (!roleInProfile)
                            return [2 /*return*/, res.status(400).json({ message: 'Error in request, no such profile in request' })];
                        return [4 /*yield*/, profile_service_1.default.getByConditions({ where: { user: currentUser, role: roleInProfile } })];
                    case 2:
                        foundprofile = _a.sent();
                        if (!foundprofile)
                            return [2 /*return*/, res.status(500).json({ message: 'Error no profile exists' })
                                // Si se encuentra algun perfil que figure en la busqueda se devuelve boleano true y termina consulta
                            ];
                        // Si se encuentra algun perfil que figure en la busqueda se devuelve boleano true y termina consulta
                        res.status(200).json({ response: true });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProfileControler;
}());
exports.default = new ProfileControler();
