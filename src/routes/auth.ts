import {Router,Request,Response} from "express";
import authController from "../controllers/auth.controller";
import clientController from "../controllers/client.controller";
import ClientController from "../controllers/client.controller";
import cookie_check from "../middlewares/payload_checker";
const router : Router = Router();


router.get("/",authController.controllertest)
router.get("/logout",authController.logout)
router.get("/isLogged",authController.isLogged)
router.post("/signIn", authController.signIn)
router.post("/signUp",authController.signUp)
router.post("/test",clientController.getFavoritesStores)

export {router};