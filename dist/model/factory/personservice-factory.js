"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_role_1 = require("../enums/app-role");
var admin_service_1 = require("../../services/admin-service");
var client_service_1 = require("../../services/client-service");
var storemanager_service_1 = require("../../services/storemanager-service");
var PersonServiceFactory = /** @class */ (function () {
    function PersonServiceFactory() {
    }
    PersonServiceFactory.prototype.createPersonServiceFromRole = function (personRole) {
        switch (personRole) {
            case app_role_1.AppRole.ADMIN:
                return new admin_service_1.AdminService();
                break;
            case app_role_1.AppRole.CLIENT:
                return new client_service_1.ClientService();
                break;
            case app_role_1.AppRole.STORE_MANAGER:
                return new storemanager_service_1.StoreManagerService();
                break;
        }
    };
    return PersonServiceFactory;
}());
exports.default = new PersonServiceFactory();
