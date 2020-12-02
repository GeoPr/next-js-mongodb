import { connect } from '../../../utils/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { db } = await connect()
		const posts = await db.collection('posts').find().toArray()
		
		res.status(200).json(posts)
	} catch (e) {}
}