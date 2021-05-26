import {Request,response,Response} from "express";
import UserService from "../services/user-service";
import ClientService from "../services/client-service";
import ProfileService from "../services/profile-service";
import {User} from "../model/entity/user";
import {Profile} from "../model/entity/profile";
import {Client} from "../model/entity/client";
import {AppRole} from "../model/enums/app-role";
import bcrypt from "bcrypt";
import JWTService from "../services/token/jwt-service";
import CookieService from "../services/cookie/cookie-service";
import {AppCookie} from "model/enums/app-cookies";
import { UserPayload } from "model/interfaces/user-payload";
import { profile } from "node:console";
import { send } from "node:process";
import { Store } from "model/entity/store";

class ClientController{
    controllertest = (req: Request,res:Response) => {
        res.send("controller responding")
    };

    async getFavoritesStores(req:Request,res:Response){
        const cookiedata = JWTService.getJwtPayloadInCookie(req);
        const client = await ClientService.getByConditions({where:{profile:cookiedata?.profileId},relations:['favorite_stores']})
        if(!client || client.favorite_stores.length === 0){
            res.status(401).json({error:"no stores found"})
        }else{
            res.status(200).json(client.favorite_stores)
        }
    }

    async deleteFavoriteStore(req:Request,res:Response) {
        
    }
        


}

export default new ClientController(); 