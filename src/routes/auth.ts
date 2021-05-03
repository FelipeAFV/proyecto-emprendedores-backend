import {Router,Request,Response} from "express";
import authController from "../controllers/auth.controller";

const router : Router = Router();

router.get("/",authController.controllertest)
router.post("/signIn", authController.signIn)
router.post("/signUp",authController.signUp)

export {router};