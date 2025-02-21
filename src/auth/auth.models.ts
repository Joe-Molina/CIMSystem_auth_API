import { prisma } from '../libs/prisma'

interface User {
  username: string
  password: string
  email: string
}

export class authModel {

  static async findUserById(id: number) {
    const user = await prisma.users.findFirst({
      where: {
        id
      }
    })

    return user
  }
  static async findUserByUsername(username: string) {
    const user = await prisma.users.findFirst({
      where: {
        username
      }
    })

    return user
  }

  static async createUser({ username, password, email }: User) {
    const newUser = await prisma.users.create({
      data: {
        username,
        password,
        email
      }
    })
    return {
      username: newUser.username,
      email: newUser.email
    }
  }





}