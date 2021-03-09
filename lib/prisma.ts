import { PrismaClient } from "@prisma/client"

declare global {
  namespace NodeJS {
    interface Global {
      prisma: any
    }
  }
}

let prisma: PrismaClient

prisma = new PrismaClient()

export default prisma
