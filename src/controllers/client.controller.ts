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
        const stores = await ClientService.getByConditions({where:{profile:req.body.id},relations:['favorite_stores']})
        if(!stores?.favorite_stores){
            res.status(401).json({error:"no stores found"})
        }else{
            res.status(200).json(stores)
        }
    }

    async deleteStore(req:Request,res:Response) {
        const {id} = req.body.id;
        try {
            await ClientService.deleteById(id)
        } catch (error) {
            return res.status(404).json({message: 'Store not found'});
        }
        
        res.status(201).json({message: 'Store deleted'});
    }
        


}

export default new ClientController(); 