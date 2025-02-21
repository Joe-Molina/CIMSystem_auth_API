import express from 'express'
import AuthRouter from './auth/auth.routes'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import interactions from './interactions/routes'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials: true, origin: ['http://10.10.1.4:3005', 'http://localhost:3001'] }))

const PORT = process.env.PORT ?? 3002

app.use('/', AuthRouter)
app.use('/interactions', interactions);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
