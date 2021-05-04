import {Request, Response, NextFunction} from 'express';
import DATA from '../controllers/data';
const jwt = require('jsonwebtoken');

class AuthMid {
    async authCheck(req:Request, res:Response, next:Function) {
        const{JWT} = req.cookies;
        if  (JWT) {
            jwt.verify(JWT, DATA.TOKEN_SECRET, (err:any, payload:any) => {
                if(err) {
                    res.status(400).json({message : 'Token not valid'});
                } else {
                    // ALGUN TIPO DE CHECKEO
                    
                    next();
                }
            });
        }
    }
}
export default new AuthMid();