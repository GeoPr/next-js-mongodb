import { Button } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import MainLayout from '../../components/MainLayout/MainLayout'
import { TApp } from '../../redux/reducers/rootReducer'
import styles from './styles.module.scss'

export default function Post() {
  const posts = useSelector((state: TApp) => state.posts)
  const router = useRouter()
  const { id } = router.query
  const post = posts.find(p => p.id === id)

  return (
    <MainLayout>
      <div className={styles.post}>
        <h4 className={styles.title}>{post.title}</h4>
        <pre className={styles.description}>{post.description}</pre>
        <Link href="/">
          <a>
            <Button color="secondary" variant="contained">
              Go back
            </Button>
          </a>
        </Link>
      </div>
    </MainLayout>
  )
}
