import  express  from "express";


import {authUser,registerUser,logoutUser} from '../controller/auth-controller.js'
// import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post('/', registerUser);
router.post('/api/users/auth',authUser);
router.post('/api/users/logout',logoutUser);


export default router;