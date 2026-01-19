import { Router } from "express";
import { addPosts, deletePost, getAllPosts, getSinglePost, getUserPosts, updatePost } from "./posts.controller.js";


const postRouter = Router()

postRouter.route('/').post(addPosts).get(getAllPosts)
postRouter.route('/:id').get(getSinglePost).put(updatePost).delete(deletePost)
postRouter.get("/me/:id",getUserPosts)





export default postRouter