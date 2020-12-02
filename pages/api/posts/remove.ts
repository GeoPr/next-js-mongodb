import { connect } from '../../../utils/database'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { db } = await connect()
		const { id } = req.body
		const post = await db.collection('posts').findOneAndDelete({ id })
		
		res.status(200).json(post)
	} catch (e) {}
}