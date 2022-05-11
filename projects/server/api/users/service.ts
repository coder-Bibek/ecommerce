import connection from "../../db/config";

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        connection.query('select * from users where active_status = 1', (err, result) => {
            if (err) {
                return reject({
                    message: 'error on fetching users',
                    status: false
                })
            }

            resolve({
                data: result,
                status: true
            })
        })
    })
}

export { fetchUser }