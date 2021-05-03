import express from "express";
import { send } from "node:process";
import "./create-database";
import cors from "cors";
import helmet from "helmet";
import {router as login_router } from "./routes/login_routes";
const app = express();
const port = process.env.port || 3000;
import JWTService from "./services/token/jwt-service";
import { AppRole } from "./model/enums/app-role";


//global middleware
/**Middleware for cors policy*/
app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200'
}));
app.use(helmet);
app.use(express.json());
app.use(express.urlencoded());
app.use('/cookie', async (req, res , next) => {
    JWTService.setJwtTokenInCookie({role: AppRole.CLIENT}, res);
    res.send('Cookie set')
})
app.use("/api/login",login_router);

app.get("/", (req,res) => res.send("home page"))

app.listen(port,() => console.log("server running..."))


