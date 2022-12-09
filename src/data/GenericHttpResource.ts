import { BaseEntityDTO, PageDTO } from '@/dtos/generics'
import { api, RSQLFilter } from '@/services'

type OptionalId = {
  id?: string
}
class GenericHttpResource<
  T extends BaseEntityDTO,
  CreateDTO = BaseEntityDTO,
  UpdateDTO extends OptionalId = OptionalId
> {
  protected uri: string

  constructor(uri: string) {
    this.uri = uri
  }

  async list(filter?: RSQLFilter): Promise<PageDTO<T>> {
    const { data } = await api.get(this.uri, {
      params: filter?.params
    })
    return data
  }

  async get(id: string): Promise<T> {
    const { data } = await api.get(`${this.uri}/${id}`)
    return data
  }

  async create(params: CreateDTO): Promise<T> {
    const { data } = await api.post(this.uri, params)
    return data
  }

  async update(entity: UpdateDTO): Promise<T> {
    const { data } = await api.put(`${this.uri}/${entity?.id}`, entity)
    return data
  }
}

export { GenericHttpResource }
