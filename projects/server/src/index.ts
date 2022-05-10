import cors from "cors"
import express from "express"

import config from "../config"
import connection from "../db/config"
import * as router from "./router"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connection.connect((err) => {
    if (err) throw err;

    console.log("🚀 Connected to database succesfully")
})

app.use("/api", router.users)

app.listen(config.port, () => {
    console.log(`🚀 server started succesfully at port ${config.port}`)
})
