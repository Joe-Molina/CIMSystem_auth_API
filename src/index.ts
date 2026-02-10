import express from 'express'
import AuthRouter from './auth/auth.routes'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import interactions from './interactions/routes'
import mails from './mails/mails.route'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials: true, origin: ['http://10.10.1.4:3005', 'http://localhost:3001', 'http://localhost:3005', "http://10.10.4.159:3005"] }))

const PORT = 3002

app.use('/', AuthRouter)
app.use('/interactions', interactions);
app.use('/mails', mails);

app.listen(PORT, () => {
  console.log(`Server is running on port 3002`)
})
