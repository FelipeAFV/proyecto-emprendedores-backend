"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
typeorm_1.createConnection().then(function () {
    console.log('Connection successful');
}).catch(function (err) {
    console.log('Connection error');
    console.log(err);
});
