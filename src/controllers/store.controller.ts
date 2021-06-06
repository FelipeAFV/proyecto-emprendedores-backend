import { json, Request, Response, Router } from "express";
import { Store } from "model/entity/store";
import { StoreCategory } from "../model/enums/store-category";
import { AppRole } from "../model/enums/app-role";
import storemanagerService from "../services/storemanager-service";
import jwtService from "../services/token/jwt-service";
import storeService from "../services/store-service";
import {fromStringToCategory} from "../utils/store-utils";


class StoreController {

    async getStoreByName(req: Request, res: Response) {
        const storeName = req.params.storeName;
        const store = await storeService.getByName(storeName);
        console.log(store);
        if (!store) return res.status(200).json({message: 'No store found'});
        res.status(200).json(store);
    }

    async createStore(req: Request, res: Response){
        //Obtenemos informacion del request
        const {name, description, category} = req.body;
        const parsedCaregory = fromStringToCategory(category);

        //Se revisa si ya existe una tienda creada con el mismo nombre
        const foundStore = await storeService.getByName(name);
        if(foundStore) return res.status(500).json({message: "store name already in use"})

         //Obtenemos informacion de la cookie
        const cookieData = jwtService.getJwtPayloadInCookie(req);
        if(cookieData?.role !== AppRole.STORE_MANAGER) return res.status(500).json({message:"User dont have permissions to create new stores"});

        //Obtenemos el manager que esta haciendo la solicitud
        const currentManager = await storemanagerService.getByConditions({where:{profile:cookieData?.profileId}})
        if(!currentManager) return res.status(500).json({message: "no manager found"})

        //Creamos la store y respondemos
        const newStore = await storeService.create({id: 0, name: name, description: description, category: category as StoreCategory , managers: [currentManager], products:[]});

        res.status(200).json({message:"store created succesfully"});

    }
}

export default new StoreController();