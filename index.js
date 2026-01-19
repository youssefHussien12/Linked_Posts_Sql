import express from 'express'
import postRouter from './src/modules/posts/posts.routes.js'
import userRouter from './src/modules/users/users.routes.js'
import cors from "cors"
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use("/auth" , userRouter)
app.use("/posts" , postRouter)







app.listen(port, () => console.log(`Example app listening on port ${port}!`))