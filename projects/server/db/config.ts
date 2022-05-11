import sql from "mysql"

import config from "../config";

const connection = sql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
})

export default connection;