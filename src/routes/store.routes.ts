import { Router } from "express";
import storeController from "../controllers/store.controller";
import RoleAuth from "../middlewares/role-auth";
import { AppRole } from "../model/enums/app-role";
const router: Router = Router();

router.post('/', RoleAuth.checkRole([AppRole.ADMIN,AppRole.STORE_MANAGER]),storeController.createStore);
router.get('/:storeName', storeController.getStoreByName);

export default router;