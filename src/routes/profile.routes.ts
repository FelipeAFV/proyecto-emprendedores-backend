import { Router } from "express"; 
import profileController from "../controllers/profile.controller";

const router: Router = Router();

router.route('/').get(profileController.createProfile);

export default router;