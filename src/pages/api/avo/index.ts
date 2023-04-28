import { type NextApiRequest, type NextApiResponse } from 'next'
import Database from '@/database/db'

const allAvos = async (request: NextApiRequest, resolve: NextApiResponse): Promise<void> => {
  const database = new Database()
  const allEntries = await database.getAll()
  const length = allEntries.length

  resolve.status(200).json({ data: allEntries, length })
}

export default allAvos
