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
import profileService from "../services/profile-service";
import storeManagerService from "../services/storemanager-service";
import jwtService from "../services/token/jwt-service";
import storemanagerService from "../services/storemanager-service";

class StoreManagerController{
    
    async getMangerStores(req: Request, res: Response){
        //ser verifica existencia y data de la cookie
        const cookieData = jwtService.getJwtPayloadInCookie(req);

        if(!cookieData) return res.status(500).json({message: 'cookie was empty'})

        //se verifica existencia de perfil actual
        const currentProfile = await profileService.getById(cookieData.profileId as number);

        if (!currentProfile) return res.status(500).json({message: 'Profile cant be found'})
        
        //ser verifica existencia de storeManager asociado al perfil actual y se obtienen sus tiendas
        const currentManager = await storemanagerService.getByConditions({where:{profile: currentProfile}, relations:['stores']});

        if (!currentManager) return res.status(500).json({message: 'Manager cant be found'})

        res.json(currentManager.stores)
        
    }    


}

export default new StoreManagerController(); 