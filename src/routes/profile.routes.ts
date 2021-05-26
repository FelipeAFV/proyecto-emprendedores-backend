import { Router } from "express"; 
import profileController from "../controllers/profile.controller";

const router: Router = Router();

router.route('/').post(profileController.createProfile);

export default router;