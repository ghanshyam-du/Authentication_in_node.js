import express from "express"
import {register, login, dashboard} from "../controller/auth.controller.js"


const router = express.Router();

router.post('/register', register)

router.post("/login", login)

router.get("/dashboard", dashboard);


export default router;


