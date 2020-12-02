import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPosts,
  removePost,
} from '../../redux/reducers/postsReducer/asyncActions'
import { TApp } from '../../redux/reducers/rootReducer'
import Link from 'next/link'
import { Button } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import styles from './styles.module.scss'

export default function List() {
  const dispatch = useDispatch()
  const posts = useSelector((state: TApp) => state.posts)

  useEffect(() => {
    ;(async () => {
      await dispatch(getPosts())
    })()
  }, [])

  const clickHandler = (id: string) => {
    dispatch(removePost(id))
  }

  return (
    <ul className={styles.list}>
      {posts.map(post => {
        return (
          <li key={post.id} className={styles.item}>
            <span className={styles.title}>{post.title}</span>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>
                <Button color="primary" variant="contained">
                  Go to the post
                </Button>
              </a>
            </Link>
            <div className={styles.icon} onClick={() => clickHandler(post.id)}>
              <CancelIcon />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
