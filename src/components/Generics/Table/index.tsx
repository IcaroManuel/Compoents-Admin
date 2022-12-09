import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiFilter } from 'react-icons/fi'

import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import { RSQLFilter } from '@/services/rsql'
import Text from '@/components/Text'
import Title from '@/components/Text/Title'
import Table, { TableProps } from '@/components/Table'
import Box from '@/components/Box'
import Button from '@/components/Button'
import Pagination from '@/components/Pagination'

import { BaseEntityDTO } from '@/dtos/generics'
import {
  Container,
  Content,
  Header,
  NoContent,
  NoContentIcon,
  PaginatorContainer,
  AddButton
} from './styles'

export type GenericTableProps<T extends BaseEntityDTO> = TableProps<T> & {
  title: string
  filter: RSQLFilter
  setFilter: (params: RSQLFilter) => void
  loading: boolean
  total: number
  page: number
  onAdd?: () => void
}
function GenericTable<T extends BaseEntityDTO>({
  title,
  columns,
  data,
  loading,
  total,
  page,
  filter,
  setFilter,
  onAdd
}: GenericTableProps<T>) {
  const { t } = useTranslation()
  return (
    <Container>
      <Content>
        <Header>
          <Title as="h2" bold>
            {title}
          </Title>

          <Button>
            <FiFilter />
            Filtros
          </Button>
        </Header>
        <Box>
          <Table columns={columns} data={data} />
          {!data.length && !loading && (
            <NoContent>
              <NoContentIcon />
              <Title>Sem conteúdo</Title>
              <Text>Não possui dados</Text>
            </NoContent>
          )}
          {loading && (
            <Skeleton
              count={4}
              width={860}
              height={50}
              style={{
                marginLeft: '20px',
                marginRight: '58px',
                marginBottom: '20px'
              }}
            />
          )}

          <PaginatorContainer>
            <Pagination
              page={page}
              total={total}
              onPageChange={(newPage) =>
                setFilter(filter.clone().setPage(newPage))
              }
            />
          </PaginatorContainer>
        </Box>
      </Content>
      {onAdd && <AddButton onClick={onAdd}>{t('button.add')}</AddButton>}
    </Container>
  )
}

export default GenericTable
