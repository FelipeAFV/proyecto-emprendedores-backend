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
exports.StoreManagerService = void 0;
var store_manager_1 = require("../model/entity/store-manager");
var generic_service_1 = require("./generic-service");
var StoreManagerService = /** @class */ (function (_super) {
    __extends(StoreManagerService, _super);
    function StoreManagerService() {
        var _this = _super.call(this, store_manager_1.StoreManager) || this;
        _this.saveDefault = function (associatedProfile) {
            return _super.prototype.create.call(_this, { id: 0, profile: associatedProfile, stores: [] });
        };
        return _this;
    }
    StoreManagerService.prototype.getPerson = function (currentProfile) {
        return _super.prototype.getByConditions.call(this, { where: { profile: currentProfile }, relations: ['stores'] });
    };
    return StoreManagerService;
}(generic_service_1.GenericService));
exports.StoreManagerService = StoreManagerService;
exports.default = new StoreManagerService();
