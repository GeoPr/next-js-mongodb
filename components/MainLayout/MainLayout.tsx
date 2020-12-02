import { useSelector } from 'react-redux'
import { TApp } from '../../redux/reducers/rootReducer'
import Loader from '../Loader/Loader'
import styles from './styles.module.scss'

export default function MainLayout({ children }) {
  const { isLoading } = useSelector((state: TApp) => state.loader)

  return (
    <>
      <div className="wrapper">
        <main className="page">
          <section className={styles.sc}>
            <div className="sc__container _container">
              <div className="sc__body">{children}</div>
            </div>
          </section>
        </main>
      </div>
      {isLoading && <Loader />}
    </>
  )
}
