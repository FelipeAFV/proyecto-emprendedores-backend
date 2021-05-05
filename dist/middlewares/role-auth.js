"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoleAuth = /** @class */ (function () {
    function RoleAuth() {
    }
    RoleAuth.prototype.checkRole = function (userRoles) {
        return function (req, res, next) {
            var currentRole = req.payload.role;
            if (!userRoles.includes(currentRole))
                res.status(401).json({ message: 'Unauthorized user' });
            next();
        };
    };
    return RoleAuth;
}());
exports.default = new RoleAuth();
