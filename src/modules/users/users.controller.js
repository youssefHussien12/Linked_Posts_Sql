import { dbConnection } from "../../../database/dbConnection.js"
import bcrypt from "bcrypt"

const connection = dbConnection()
let signUp = (req, res) => {
    connection.query("insert into users set ?", req.body)
    res.status(201).json({ message: "user created successfully" })
}

let signIn = (req, res) => {

    connection.execute(`select id , email , password from users where email = "${req.body.email}" `, (err, data) => {
        if (data.length != 0) {
            let match = bcrypt.compareSync(req.body.password, data[0].password)
            if (match) {
                return res.status(200).json({ message: "user logged in successfully ..... token", userId: data[0].id })
            } else {
                return res.status(409).json({ message: "wrong email or password" })
            }
        } else {
            return res.status(404).json({ message: "user not found" })
        }
    })
}



export {
    signUp,
    signIn
}