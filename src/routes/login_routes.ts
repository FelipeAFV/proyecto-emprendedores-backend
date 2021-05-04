import {Router,Request,Response} from "express";
import login_controler from "../controllers/auth.controller";

const router : Router = Router();

router.get("/",login_controler.controllertest)

router.post("/signup",login_controler.signUp)

export {router};