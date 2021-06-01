import {Router} from "express";
import authorizationController from "../controllers/authorization.controller";
const router = Router();

router.post('/isStoreOwner', authorizationController.isStoreOwner);

export default router;