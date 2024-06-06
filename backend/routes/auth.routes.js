import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
// Here, router is created using express.Router() and then 
// router.get defines a route handler for /login.
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
