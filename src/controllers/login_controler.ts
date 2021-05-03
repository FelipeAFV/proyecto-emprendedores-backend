import {Request,Response} from "express";
import UserService from "../services/user-service";
import ClientService from "../services/client-service";
import ProfileService from "../services/profile-service";
import {User} from "../model/entity/user";
import {Profile} from "../model/entity/profile";
import {Client} from "../model/entity/client";
import { AppRole } from "../model/enums/app-role";
import bcrypt from "bcrypt";

class login_controler{
    controllertest = (req: Request,res:Response) => {
        res.send("controller responding")
    }

    signup = async (req: Request,res:Response) => {
        const user_found = await UserService.getByConditions({where: {username: req.body.username}});
        
        if(user_found){
            res.status(500).json({error: "user alredy exists"})
         }else{
                bcrypt.hash(req.body.password, 5)
                    .then( (hash) => {
                        const new_user = new User();
                        new_user.username = req.body.username;
                        new_user.password = hash;
                        return Promise.resolve(new_user)
                    })
                    .then((new_user) => {
                        const new_profile = new Profile();
                        new_profile.firstName = req.body.firstname;
                        new_profile.lastName = req.body.lastname;
                        new_profile.email = req.body.email;
                        new_profile.user = new_user;
                        return Promise.resolve(new_profile)
                    })
                    .then (async (new_profile) => {
                        const new_client = new Client();
                        new_client.profile = new_profile;
                        await ClientService.create(new_client)
                        res.status(200).json({message: "user added succesfully"})
                    }).catch((error) => {
                        res.status(500).json({error: "internal server error"})
                    })   
                
            }
        //else{
        //     //const new_user = new User();
        //     //new_user.username = req.body.username;
        //     //new_user.password = req.body.password;
        //     bcrypt.hash(req.body.password, 5)
        //         .then( (hash) => {
        //             const new_user = new User();
        //             new_user.username = req.body.username;
        //             new_user.password = hash;
        //             return Promise.resolve(new_user)
        //         })
        //         .then(async (new_user) => UserService.create(new_user));    
        //     res.json({message: "user added succesfully"})
        // }
    }
}

export default new login_controler();