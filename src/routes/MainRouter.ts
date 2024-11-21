import { Router } from 'express';
import MainController from '../controller/MainController';

const router = Router();

router.get('/', MainController.main);
router.get('/health', MainController.health);



export default router;