import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { routes } from './route/index';
import cors from 'cors'

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './util/db'

const app = express()
const port = process.env.PORT || 3000
const baseUrl = process.env.BASE_URL || ''
const apiName = process.env.API_NAME || ''

connectDB()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get(baseUrl, (req, res) => {
    res.send(`API ${apiName} is OK`)
})

app.use(`${baseUrl}/`, routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(`err: ${err}`)
    res.status(500).json({ errorMessage: err.message })
})

app.listen(port, () => console.log(`${apiName} running on port ${port}`))