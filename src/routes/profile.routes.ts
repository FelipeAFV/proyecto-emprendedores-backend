import { Router } from "express"; 
import profileController from "../controllers/profile.controller";

const router: Router = Router();

router.route('/').post(profileController.createProfile);
router.get('/hasProfile/:profile',profileController.hasProfile);

export default router;