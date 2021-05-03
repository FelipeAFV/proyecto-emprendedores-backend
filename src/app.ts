import express from "express";
import { send } from "node:process";
import "./create-database";
import cors from "cors";
import helmet from "helmet";
import {router as login_router } from "./routes/login_routes";
const app = express();
const port = process.env.port || 3000;

//global middleware
/**Middleware for cors policy*/
app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200'
}));
app.use(helmet);
app.use(express.json());
app.use(express.urlencoded());
app.use("/api/login",login_router);

app.get("/", (req,res) => res.send("home page"))

app.listen(port,() => console.log("server running..."))


