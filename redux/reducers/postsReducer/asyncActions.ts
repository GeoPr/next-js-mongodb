import { TApp, TActions } from './../rootReducer'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import * as actions from './actions'
import * as loaderActions from '../loaderReducer/actions'

type ActionsTypes = TActions<typeof actions> | TActions<typeof loaderActions>

type TThunk = ThunkAction<Promise<any>, TApp, unknown, ActionsTypes>

export const getPosts = (): TThunk => async dispatch => {
  dispatch(loaderActions.showLoader())

  try {
    const response = await axios.get('/api/posts/get')
    const posts = await response.data

    dispatch(actions.setPosts(posts))
  } catch (e) {
    console.log(e.message)
  }

  dispatch(loaderActions.hideLoader())
}

export const createPost = (
  title: string,
  description: string,
): TThunk => async dispatch => {
  dispatch(loaderActions.showLoader())

  try {
    await axios.post('/api/posts/create', { title, description })

    dispatch(getPosts())
  } catch (e) {
    console.log(e.message)
  }

  dispatch(loaderActions.hideLoader())
}

export const removePost = (id: string): TThunk => async dispatch => {
  dispatch(loaderActions.showLoader())

  try {
    await axios.post('/api/posts/remove', { id })

    dispatch(getPosts())
  } catch (e) {}

  dispatch(loaderActions.hideLoader())
}