import {Router,Request,Response} from "express";
import login_controler from "../controllers/login_controler";

const router : Router = Router();

router.get("/",login_controler.controllertest)

router.post("/singup",login_controler.signup)

export {router};