import {Router,Request,Response} from "express";
import clientController from "../controllers/client.controller";
const router : Router = Router();

router.get("/favoriteStores",clientController.getFavoritesStores);
router.put('/')
router.delete('/favoritesStores/:id', clientController.deleteStore);

export default router;