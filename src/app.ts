import express from "express";
import { send } from "node:process";
import "./create-database";
import {router as login_router } from "./routes/login_routes";
const app = express();
const port = process.env.port || 3000;

//global middleware

app.use(express.json());
app.use(express.urlencoded());
app.use("/api/login",login_router);

app.get("/", (req,res) => res.send("home page"))

app.listen(port,() => console.log("server running..."))


