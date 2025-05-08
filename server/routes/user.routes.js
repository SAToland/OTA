import { addUser, getAllUsers, getOneUserById, updateOneUser, deleteUserById } from "../controllers/user.controller.js";
import {Router} from 'express';

const userRouter = Router();

userRouter.route("/login")
    .get(getAllUsers)
    .post(addUser)

userRouter.route("/view/profile/:id")
    .get(getOneUserById)
    .put(updateOneUser)
    .delete(deleteUserById)

export default userRouter;