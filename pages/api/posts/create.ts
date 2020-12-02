import { connect } from '../../../utils/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connect()
    const { title, description } = req.body

    const posts = await db.collection('posts').insertOne({
      id: Date.now().toString(),
      title,
      description,
    })

    res.status(200).json(posts)
  } catch (e) {}
}
