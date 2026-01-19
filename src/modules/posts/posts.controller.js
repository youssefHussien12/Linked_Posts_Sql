import { dbConnection } from "../../../database/dbConnection.js"



const conn = dbConnection()


let addPosts = (req, res) => {
    conn.query("insert into posts set ?", req.body)
    res.status(201).json({ message: "post created successfully" })
}

let getAllPosts = (req, res) => {
    conn.execute("select users.id as userId , users.name , posts.id as postId , posts.title , posts.description from users join posts on users.id = posts.user_id", (err, data) => {
        res.status(200).json({ message: "success", AllPosts: data })
    })
}
let getSinglePost = (req, res) => {
    conn.execute(`select users.id as userId , users.name , posts.id as postId , posts.title , posts.description from users join posts on users.id = posts.user_id where posts.id = ${req.params.id}`, (err, data) => {
        res.status(200).json({ message: "success", Post: data })
    })
}
let getUserPosts = (req, res) => {
    conn.execute(`select users.id as userId , users.name , posts.id as postId , posts.title , posts.description from users join posts on users.id = posts.user_id where users.id = ${req.params.id}`, (err, data) => {
        res.status(200).json({ message: "success", UserPosts: data })
    })
}
let updatePost = (req, res) => {
    conn.query("update posts set ? where id = ?", [req.body, req.params.id])
    res.status(200).json({ message: "success" })
}
let deletePost = (req, res) => {
    conn.execute(`delete from posts where id =${req.params.id}`)
    res.status(200).json({ message: "success" })
}







export {
    addPosts,
    getAllPosts,
    getSinglePost,
    getUserPosts,
    updatePost,
    deletePost
}