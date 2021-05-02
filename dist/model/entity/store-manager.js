"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreManager = void 0;
var typeorm_1 = require("typeorm");
var profile_1 = require("./profile");
var store_1 = require("./store");
var StoreManager = /** @class */ (function () {
    function StoreManager() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "store_manager_id" }),
        __metadata("design:type", Number)
    ], StoreManager.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return profile_1.Profile; }),
        typeorm_1.JoinColumn({ name: "profile_id" }),
        __metadata("design:type", profile_1.Profile)
    ], StoreManager.prototype, "profile", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return store_1.Store; }, function (store) { return store.managers; }),
        typeorm_1.JoinTable({
            name: "managers_stores",
            joinColumn: {
                name: "manager_id",
                referencedColumnName: "id"
            },
            inverseJoinColumn: {
                name: "store_id",
                referencedColumnName: "id"
            }
        }),
        __metadata("design:type", Array)
    ], StoreManager.prototype, "stores", void 0);
    StoreManager = __decorate([
        typeorm_1.Entity("store_manager")
    ], StoreManager);
    return StoreManager;
}());
exports.StoreManager = StoreManager;
