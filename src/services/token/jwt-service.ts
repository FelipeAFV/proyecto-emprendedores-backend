import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { Response } from "express";
import { AppCookie } from "../../model/enums/app-cookies";
import { UserPayload } from "../../model/interfaces/user-payload";
import CookieService from "../cookie/cookie-service";

class JWTService {

    private generateToken(payload: UserPayload):string {
        // TODO: Change secret key
        return jwt.sign(payload, 'secret', {expiresIn: '1h'});
    }

    setJwtTokenInCookie(payload: UserPayload, res: Response) {
        const token = this.generateToken(payload);
        CookieService.setCookie(AppCookie.JWT, token, res);
    }

}


export default new JWTService();