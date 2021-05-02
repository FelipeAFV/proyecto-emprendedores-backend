import {Request,Response} from "express";
import UserService from "../services/user-service";
import {User} from "../model/entity/user";
import bcrypt from "bcrypt";

class login_controler{
    controllertest = (req: Request,res:Response) => {
        res.send("controller responding")
    }

    signup = async (req: Request,res:Response) => {
        const user_found = await UserService.getByConditions({where: {username: req.body.username}});
        
        if(user_found){
            res.json({error: "user alredy exists"})
        }else{
            //const new_user = new User();
            //new_user.username = req.body.username;
            //new_user.password = req.body.password;
            bcrypt.hash(req.body.password, 5)
                .then( (hash) => {
                    const new_user = new User();
                    new_user.username = req.body.username;
                    new_user.password = hash;
                    return Promise.resolve(new_user)
                })
                .then(async (new_user) => UserService.create(new_user));    
            res.json({message: "user added succesfully"})
        }
    }
}

export default new login_controler();