require("dotenv").config()

const config = {
    db: {
        host: process.env.HOST || "localhost",
        user: process.env.user,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },

    port: process.env.PORT || 5000,
}

export default config;
