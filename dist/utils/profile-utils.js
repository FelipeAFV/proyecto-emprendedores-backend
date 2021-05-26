"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromStringToAppRole = void 0;
var app_role_1 = require("../model/enums/app-role");
var fromStringToAppRole = function (role) {
    var roleParsed = role;
    roleParsed = roleParsed.toUpperCase();
    return role == app_role_1.AppRole.ADMIN ? app_role_1.AppRole.ADMIN :
        (role == app_role_1.AppRole.CLIENT ? app_role_1.AppRole.CLIENT :
            (role == app_role_1.AppRole.STORE_MANAGER ? app_role_1.AppRole.STORE_MANAGER : undefined));
};
exports.fromStringToAppRole = fromStringToAppRole;
