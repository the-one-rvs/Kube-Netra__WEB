import { Router } from "express";
import { 
    changePassword,
    deleteUser,
    getAllUser,
    getMe, 
    loginUser, 
    logoutUser, 
    reclaimTokens, 
    registerUser,
    updateUser
 } from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router = Router();


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(verifyJWT, logoutUser)
router.route("/currentUser").get(verifyJWT, getMe)
router.route("/allUsers").get(verifyJWT, getAllUser)
router.route("/reclaimTokens").get(verifyJWT, reclaimTokens)
router.route("/updateUserDetails").patch(verifyJWT, updateUser)
router.route("/changePassword").patch(verifyJWT, changePassword)
router.route("/deleteUser").delete(verifyJWT, deleteUser)

export default router