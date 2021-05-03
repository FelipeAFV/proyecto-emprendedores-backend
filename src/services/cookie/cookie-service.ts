import { Response } from "express";
import { AppCookie } from "model/enums/app-cookies";

class CookieService {

    setCookie(key: AppCookie, value: string, res: Response) {
        res.cookie(key, value, {httpOnly: true});
    }
}

export default new CookieService();