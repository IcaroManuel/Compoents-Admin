type PageDTO<T> = {
  data: T[]
  page: number
  total: number
  next?: number
  prev?: number
}

export type { PageDTO }
