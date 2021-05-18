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
var store_1 = require("../model/entity/store");
var generic_service_1 = require("./generic-service");
var StoreService = /** @class */ (function (_super) {
    __extends(StoreService, _super);
    function StoreService() {
        return _super.call(this, store_1.Store) || this;
    }
    StoreService.prototype.getByName = function (storeName) {
        return _super.prototype.getByConditions.call(this, { where: { name: storeName } });
    };
    return StoreService;
}(generic_service_1.GenericService));
exports.default = new StoreService();
