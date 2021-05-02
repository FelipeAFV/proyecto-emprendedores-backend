"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("./create-database");
var login_routes_1 = require("./routes/login_routes");
var app = express_1.default();
var port = process.env.port || 3000;
//global middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use("/api/login", login_routes_1.router);
app.get("/", function (req, res) { return res.send("home page"); });
app.listen(port, function () { return console.log("server running..."); });
