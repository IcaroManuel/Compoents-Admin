import React from 'react'

import { PageDTO } from '@/dtos/generics'
import { Container } from './styles'

type PaginationProps = Omit<PageDTO<unknown>, 'data' | 'next' | 'prev'> & {
  onPageChange: (page: number) => void
}
const Pagination: React.FC<PaginationProps> = ({
  total,
  page,
  onPageChange
}) => {
  const pageCount = Math.round(total / 20) || 1
  const handlePageChange = ({ selected }: { selected: number }) => {
    onPageChange(selected + 1)
  }

  return (
    <Container
      pageCount={pageCount}
      initialPage={page - 1}
      onPageChange={handlePageChange}
      onPageActive={handlePageChange}
      onClick={handlePageChange}
    />
  )
}

export default Pagination
