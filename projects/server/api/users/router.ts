import express from 'express'
import * as controller from './controller'

const router = express.Router({
    strict: true,
})

router.get("/users", controller.all)

export default router
