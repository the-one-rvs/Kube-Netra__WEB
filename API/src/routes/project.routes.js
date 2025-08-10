import { Router } from "express";
import { 
    createProject,
    deleteProject,
    enterProject,
    exitProject,
    getCurrentProjectDetails,
    updateProject
 } from "../controller/project.controller.js";
import { verifyProject } from "../middleware/project.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/createProject").post(verifyJWT, createProject)
router.route("/enterProject/:projectId").get(verifyJWT, enterProject)
router.route("/exitProject").get(verifyJWT, verifyProject, exitProject)
router.route("/updateProject").patch(verifyJWT, verifyProject, updateProject)
router.route("/deleteProject").delete(verifyJWT, verifyProject, deleteProject)
router.route("/getCurrentProjectDetails").get(verifyJWT, verifyProject, getCurrentProjectDetails)

export default router