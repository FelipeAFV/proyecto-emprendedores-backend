import { Router } from "express";
import managerController from "../controllers/storeManager.controller";
import roleAuth from '../middlewares/role-auth';
import {AppRole} from '../model/enums/app-role';

const router: Router = Router();

router.get('/getMyStores', roleAuth.checkRole([AppRole.STORE_MANAGER]),managerController.getMangerStores)


export default router;