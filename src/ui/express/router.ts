import { userDatabase } from "@data/index"
import { Router } from 'express'

const router = Router()

router.get('/users', (_, res, next) => {
    userDatabase.findUsers().then(users => {
        res.status(200).send({
            payload: users
        })
    }).catch(err => next(err))
})

export default router
