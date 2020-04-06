//require('module-alias/register')
require('dotenv').config();
import createGraphQlServer from '@ui/express/graphql';
import userRouter from "@ui/express/rest/user";
import express, { Response, Request, NextFunction } from 'express';


(async () => {

    const app = express()

    // bodyparser
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    await createGraphQlServer(app)
    app.use(userRouter)

    // 404
    app.use((_, res: Response) => {
        res.status(404).json({
            status: 'Page does not exist'
        });
    });

    // Catch and send error messages
    app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
        if (err) {
            console.error(err.message)
            if (!err.statusCode) {
                err.statusCode = 500
            } // Set 500 server code error if statuscode not set
            return res.status(err.statusCode).send({
                statusCode: err.statusCode,
                message: err.message
            })
        }

        return next()
    })



    const PORT = process.env.PORT || 3000

    app.listen(PORT, () => {
        console.log(`Listening on PORT: ${PORT}`);
    })
})()
