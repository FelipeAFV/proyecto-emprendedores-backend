import { Router } from "express";
import storeController from "../controllers/store.controller";
const router: Router = Router();

router.post('/', storeController.createStore);
router.get('/:storeName', storeController.getStoreByName);

export default router;