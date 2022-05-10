import express from "express"

import config from "../config"

const app = express()

app.listen(config.port, () => {
    console.log(`server started succesfully at port ${config.port}`)
})