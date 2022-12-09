import { ExpressionNode } from '@rsql/ast'
import { parse } from '@rsql/parser'
import { emit } from '@rsql/emitter'

type RsqlParams = {
  search: string
  page: number
  order: string
  size?: number
}

class RSQLFilter {
  page: number
  size?: number
  search?: ExpressionNode

  constructor({ page, search, size }: Partial<RSQLFilter>) {
    this.page = page || 1
    this.size = size
    this.search = search
  }

  static build() {
    return new RSQLFilter({ page: 1 })
  }

  static fromUri(uri: string): RSQLFilter {
    const searchParams = new URLSearchParams(uri)
    const page = parseInt(searchParams.get('page') || '1') || 1
    const size = parseInt(searchParams.get('size') || '20') || 20
    const searchValue = searchParams.get('search')
    const search = searchValue ? parse(searchValue) : undefined
    return new RSQLFilter({ page, search, size })
  }

  get params(): RsqlParams {
    return {
      search: this.search ? emit(this.search) : '',
      page: this.page,
      size: this.size,
      order: ''
    }
  }

  get uri(): string {
    const { page } = this.params
    const url = new URLSearchParams()
    url.append('page', String(page))
    return url.toString()
  }

  clone(): RSQLFilter {
    return new RSQLFilter(this)
  }

  setPage(page: number): this {
    this.page = page
    return this
  }

  setSize(size: number): this {
    this.size = size
    return this
  }

  setOperation(expression: ExpressionNode): this {
    this.search = expression
    return this
  }
}

export { RSQLFilter }
