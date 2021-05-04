import express from "express";
import { send } from "node:process";
import "./create-database";
import cors from "cors";
import helmet from "helmet";
import {router as authController } from "./routes/auth";
import cookieParser from "cookie-parser";
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

app.use(helmet());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use('/cookie', async (req, res , next) => {
    JWTService.setJwtInCookie({role: AppRole.CLIENT}, res);
    res.send('Cookie set')
})
app.use("/api",authController);
app.use('/verifycookie', async (req, res , next) => {
    const payload = JWTService.getJwtPayloadInCookie(req);
    if (!payload) {
        console.log('Token Not provided or expired');
        res.send('Token Not provided or expired');
    }
    res.send(payload);
})

app.get("/", (req,res) => res.send("home page"))

app.listen(port,() => console.log("server running..."))


