require('dotenv').config();
import router from "@ui/router";
import express, { Response } from 'express';

const app = express()

// bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router)

// Catch and send error messages
app.use((err: any, _: any, res: Response, next: Function) => {
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

  next()
})

// 404
app.use((_, res: Response) => {
  res.status(404).json({
    status: 'Page does not exist'
  });
});


const PORT = config.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
})