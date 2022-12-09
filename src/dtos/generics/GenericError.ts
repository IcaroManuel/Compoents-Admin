import { FormikErrors } from 'formik'

type GenericError<T> = FormikErrors<T> & {
  geral: string
}

export type { GenericError }
