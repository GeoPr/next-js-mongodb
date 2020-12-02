require('dotenv').config()
import { MongoClient } from 'mongodb'
import config from '../config'

const client = new MongoClient(config.mongoUri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

export const connect = async () => {
	if (!client.isConnected()) await client.connect()
	
	const db = client.db('posts')
	
	return { db, client }
}