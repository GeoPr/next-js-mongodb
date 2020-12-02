import { SET_POSTS } from './actionsTypes'
import { TActions } from './../rootReducer'
import * as actions from './actions'

export interface IPost {
  _id: string
  id: string
  title: string
  description: string
}

type TInitalState = Array<IPost>

const initalState: TInitalState = []

type ActionsTypes = TActions<typeof actions>

export const postsReducer = (
  state: TInitalState = initalState,
  action: ActionsTypes,
): TInitalState => {
  switch (action.type) {
    case SET_POSTS: {
			const { posts } = action.payload

      return posts
    }

    default:
      return state
  }
}
