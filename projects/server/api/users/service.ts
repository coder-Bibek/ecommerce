import connection from "../../db/config";

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        const a = 7;

        if (a < 5) {
            return reject({
                message: "error on fetch",
                status: false
            })
        }

        resolve({
            message: "success",
            status: true
        })
    })
}

export { fetchUser }