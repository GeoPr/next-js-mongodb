import { loaderReducer } from './loaderReducer/loaderReducer'
import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer/postsReducer'

export const rootReducer = combineReducers({
	posts: postsReducer,
	loader: loaderReducer
})

export type TApp = ReturnType<typeof rootReducer>

type TProperties<T> = T extends {
	[key: string]: infer U
} ? U : never

export type TActions<T extends {
	[key: string]: (...args: any[]) => any
}> = ReturnType<TProperties<T>>