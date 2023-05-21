import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../Controllers/UserController.js";

import { checkAdminAuthorization } from "../Config/auth.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", checkAdminAuthorization, updateUser);
router.delete("/:id", checkAdminAuthorization, deleteUser);

export default router;
