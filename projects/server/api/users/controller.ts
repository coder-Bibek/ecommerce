import { Request, Response } from "express"
import * as service from "./service"

const all = (req: Request, res: Response) => {
    service
        .fetchUser()
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            res.json(err)
        })
}

export { all }