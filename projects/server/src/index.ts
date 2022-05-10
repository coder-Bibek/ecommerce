import cors from "cors"
import express from "express"

import config from "../config"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(config.port, () => {
    console.log(`server started succesfully at port ${config.port}`)
})
