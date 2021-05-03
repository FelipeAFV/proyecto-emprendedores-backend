import { Response, Request } from "express";
import { AppCookie } from "model/enums/app-cookies";

class CookieService {

    setCookie(key: AppCookie, value: string, res: Response) {
        res.cookie(key, value, {httpOnly: true});
    }

    getCookie(key: AppCookie, req: Request) {
        return req.cookies[key.valueOf()];
    }
}

export default new CookieService();