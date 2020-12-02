import { TextField, Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createPost } from '../../redux/reducers/postsReducer/asyncActions'
import styles from './styles.module.scss'

interface IData {
  title: string
  description: string
}

export default function Form() {
  const { register, handleSubmit, errors, reset } = useForm<IData>()
  const dispatch = useDispatch()

  const submitHandler = handleSubmit(async ({ title, description }) => {
    await dispatch(createPost(title, description))

    reset()
  })

  return (
    <form
      action="#"
      className={styles.form}
      noValidate
      onSubmit={submitHandler}>
      <TextField
        type="text"
        name="title"
        autoComplete="off"
        color="primary"
        variant="filled"
        label="Post title"
        inputRef={register({ required: true })}
        error={!!errors.title}
        helperText={!!errors.title ? 'This is a required field' : ''}
      />
      <TextField
        type="text"
        name="description"
        autoComplete="off"
        color="primary"
        variant="filled"
        label="Post description"
        multiline
        rows="10"
        inputRef={register({ required: true, minLength: 10 })}
        error={!!errors.description}
        helperText={!!errors.title ? 'This is a required field' : ''}
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        className={styles.button}>
        Add
      </Button>
    </form>
  )
}
