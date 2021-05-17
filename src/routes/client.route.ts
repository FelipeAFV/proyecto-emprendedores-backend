import {Router,Request,Response} from "express";
import clientController from "../controllers/client.controller";
const router : Router = Router();

router.get("/client",clientController.getFavoritesStores)

export default router;