import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { Response, Request } from "express";
import { AppCookie } from "../../model/enums/app-cookies";
import { UserPayload } from "../../model/interfaces/user-payload";
import CookieService from "../cookie/cookie-service";
import DATA from "../../controllers/data";

class JWTService {

    private generateToken(payload: UserPayload):string {
        // TODO: Change secret key
        return jwt.sign(payload, DATA.TOKEN_SECRET, {expiresIn: '3h'});
    }

    setJwtInCookie(payload: UserPayload, res: Response) {
        const token = this.generateToken(payload);
        CookieService.setCookie(AppCookie.JWT, token, res);
    }

    getJwtPayloadInCookie(req: Request): UserPayload | undefined  {
        const token = CookieService.getCookie(AppCookie.JWT, req);
        if (!token) return undefined;
        try {

            const userPayload: UserPayload = jwt.verify(token, DATA.TOKEN_SECRET) as UserPayload;
            console.log(userPayload);
            return userPayload;
        } catch(err) {
            console.log(err);
            return undefined;
        }
    }

}


export default new JWTService();