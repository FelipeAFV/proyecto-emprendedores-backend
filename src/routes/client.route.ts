import {Router,Request,Response} from "express";
import { AppRole } from "../model/enums/app-role";
import clientController from "../controllers/client.controller";
import RoleAuth from "../middlewares/role-auth";
const router : Router = Router();

router.get("/favoriteStores",RoleAuth.checkRole([AppRole.CLIENT]),clientController.getFavoritesStores);
router.delete('/favoritesStores/:id',RoleAuth.checkRole([AppRole.CLIENT]), clientController.deleteFavoriteStore);

export default router;