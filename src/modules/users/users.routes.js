import { Router } from "express";
import { signIn, signUp } from "./users.controller.js";
import { checkEmailExist } from "../../middleware/checkEmailExist.js";


const userRouter = Router()

userRouter.post("/sign-up" , checkEmailExist,signUp)
userRouter.post("/sign-in" , signIn)






export default userRouter