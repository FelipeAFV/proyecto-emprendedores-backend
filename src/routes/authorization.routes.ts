import {Router} from "express";
import authorizationController from "../controllers/authorization.controller";
import RoleAuth from "../middlewares/role-auth";
import { AppRole } from "model/enums/app-role";
const router = Router();

router.post('/isStoreOwner', RoleAuth.checkRole([AppRole.STORE_MANAGER]),authorizationController.isStoreOwner);

export default router;