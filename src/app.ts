import express from "express";
import { Request, Response } from "express";
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
import payload_check from "./middlewares/payload_checker"
import roleAuth from "./middlewares/role-auth";
import { Client } from "model/entity/client";
import clientRoutes from './routes/client.route';
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



/**Authentication and Authorization routes */
app.use("/",authController);


/**Authentication protected route : only logged users can access */
app.use('/api', payload_check);
app.use('/api/client', clientRoutes);
/**Authorization protected route : only users with certain roles can access */
app.use('/api/adminRoute', roleAuth.checkRole([AppRole.ADMIN, AppRole.CLIENT]), (req: Request, res: Response) => {
    res.status(200).json({message: 'Admin data'});
} )
//app.use('/verifycookie',payload_check,(req,res) => res.send(req.payload)) async (req, res , next) => {
    // const payload = JWTService.getJwtPayloadInCookie(req);
    // if (!payload) {
    //     console.log('Token Not provided or expired');
    //     res.send('Token Not provided or expired');
    // }
    // res.send(payload);
     
//})

app.get("/", (req,res) => res.send("home page"))

app.listen(port,() => console.log("server running..."))


