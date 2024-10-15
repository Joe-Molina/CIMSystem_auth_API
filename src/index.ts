import express from 'express'
import AuthRouter from './routes/auth.routes'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://localhost:3001' }))

const PORT = process.env.PORT ?? 3000

app.use('/', AuthRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
