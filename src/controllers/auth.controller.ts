import { authModel } from '../models/auth.models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '../../config'


export class auth {
  static async register(req: any, res: any) {
    const { username, email, password } = req.body

    try {
      const userExist = await authModel.findUserByUsername(username)

      if (userExist) {
        res.json({ alert: "this user already exist" })

      } else {

        const hashedPassword = bcrypt.hashSync(password, 10)

        const dataUser = {
          username,
          password: hashedPassword,
          email
        }

        const newUser = await authModel.createUser(dataUser)

        res.json(newUser)

      }


    } catch (err) {
      res.json({ error: err })
    }

  }

  static async login(req: any, res: any) {
    const { username, password } = req.body

    try {
      const user = await authModel.findUserByUsername(username)

      if (user) {

        const token = jwt.sign({ id: user.id, username: user.username, email: user.email }, JWT_SECRET_KEY, {
          expiresIn: '1h'
        })

        const matchPassword = bcrypt.compareSync(password, user.password)

        if (matchPassword) {
          res.cookie('access_token', token, {
            secure: process.env.NODE_ENV === 'production'
          }).send('cooclie is set correctly')
        } else {
          res.json({ alert: "incorrect password" })
        }

      } else {

        res.json({ alert: "user not found" })
      }

    } catch (error) {
      res.json(error)
    }

  }

  static async logout(_req: any, res: any) {
    res.clearCookie('access_token')
    res.send('coocie is cleared correctly')
  }

  static async protected(req: any, res: any) {
    try {

      const token = req.cookies.access_token

      if (!token) {
        res.status(403).send('unauthorized')
      } else {
        const data = jwt.verify(token, JWT_SECRET_KEY)
        res.json(data)
      }
    } catch (error) {
      res.json({ error })
    }
  }

}