import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body
  try {
    const member = await prisma.member.create({ data: { name, email } })
    res.status(200).json(member)
  } catch (err) {
    console.error(err)
  }
}
