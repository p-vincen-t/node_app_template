import { userDatabase } from "@data/index"
import { Router, Response, NextFunction } from 'express'

const userRouter = Router()

userRouter.get('/users', (_, res: Response, next: 
    NextFunction) => {
    userDatabase.findUsers().then(users => {
        res.status(200).send({
            payload: users
        })
    }).catch(err => next(err))
})

export default userRouter