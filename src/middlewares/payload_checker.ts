import {Router,Request,Response,NextFunction} from "express";
import { AppCookie } from "../model/enums/app-cookies";
import JWTService from "../services/token/jwt-service"


const payload_check = (req:Request,res:Response,next:NextFunction) => {
    const payload = JWTService.getJwtPayloadInCookie(req);
    if(!payload){
        res.status(400).json({error: 'Token Not provided or expired'})
    }else{
        req.payload = payload;
        next();
    }
}

export default payload_check;