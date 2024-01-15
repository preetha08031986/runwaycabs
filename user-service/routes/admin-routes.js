import  express  from "express";


import {registerAdmin,loginAdmin,logoutAdmin} from '../controller/admin-controller.js'
// import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post('/', registerAdmin);
router.post('/api/users/auth',loginAdmin);
router.post('/api/users/logout',logoutAdmin);


export default router;