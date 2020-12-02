import { IPost } from './postsReducer'
import { SET_POSTS } from './actionsTypes'

export const setPosts = (posts: Array<IPost>) => ({
	type: SET_POSTS,
	payload: { posts }
})