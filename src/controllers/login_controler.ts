import {Request,Response} from "express";


class login_controler{
    controllertest = (req: Request,res:Response) => {
        res.send("controller responding")
    }
}

export default new login_controler();