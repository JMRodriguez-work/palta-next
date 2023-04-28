import { type NextApiRequest, type NextApiResponse } from 'next'
import Database from '@/database/db'

const getAvoById = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const database = new Database()
  const id = req.query.id
  const palta = await database.getById(id as string)
  res.json(palta)
}

export default getAvoById
