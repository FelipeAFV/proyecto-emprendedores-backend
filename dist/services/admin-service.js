"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
var admin_1 = require("../model/entity/admin");
var generic_service_1 = require("./generic-service");
var AdminService = /** @class */ (function (_super) {
    __extends(AdminService, _super);
    function AdminService() {
        var _this = _super.call(this, admin_1.Admin) || this;
        _this.saveDefault = function (associatedProfile) {
            return _super.prototype.create.call(_this, { id: 0, profile: associatedProfile });
        };
        return _this;
    }
    return AdminService;
}(generic_service_1.GenericService));
exports.AdminService = AdminService;
exports.default = new AdminService();
