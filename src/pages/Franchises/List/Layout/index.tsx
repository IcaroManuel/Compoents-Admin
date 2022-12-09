import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { Column } from 'react-table'

import Table, { GenericTableProps } from '@/components/Generics/Table'
import Badge, { BadgeType } from '@/components/Badge'
import { FranchiseDTO } from '@/dtos/franchises/FranchiseDTO'

export type FranchisesProps = Omit<
  GenericTableProps<FranchiseDTO>,
  'title' | 'columns' | 'getRowId'
>
const Layout: React.FC<FranchisesProps> = (props) => {
  const { t } = useTranslation()
  const badgeType: Record<string, BadgeType> = {
    open: 'success',
    closed: 'danger',
    soon: 'warning'
  }
  return (
    <Table
      {...props}
      columns={
        [
          { Header: t('label.name'), accessor: 'name' },
          {
            Header: t('label.status'),
            accessor: 'status',
            Cell: (item) => (
              <Badge type={badgeType[item.value]}>
                {t(`franchises.status.${item.value}`, {
                  defaultValue: item.value
                })}
              </Badge>
            )
          },
          {
            Header: t('label.timezone'),
            accessor: 'timezone'
          },
          {
            Header: t('label.document'),
            accessor: 'document'
          },
          {
            Header: t('label.details'),
            accessor: 'id',
            Cell: ({ value }) => (
              <a href={`/franchises/edit/${value}`}>
                <FiEdit size="18px" />
              </a>
            )
          }
        ] as Column<FranchiseDTO>[]
      }
      title={t('pages.franchises.title')}
    />
  )
}

export default Layout
