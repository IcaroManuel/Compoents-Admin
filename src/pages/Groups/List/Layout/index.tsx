import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { Column } from 'react-table'

import Table, { GenericTableProps } from '@/components/Generics/Table'
import { GroupDTO } from '@/dtos/groups/GroupDTO'

export type GroupsProps = Omit<
  GenericTableProps<GroupDTO>,
  'title' | 'columns' | 'getRowId'
>
const Layout: React.FC<GroupsProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Table
      {...props}
      columns={
        [
          { Header: t('label.name'), accessor: 'name' },
          {
            Header: t('label.details'),
            accessor: 'id',
            Cell: ({ value }) => (
              <a href={`/groups/edit/${value}`}>
                <FiEdit size="18px" />
              </a>
            )
          }
        ] as Column<GroupDTO>[]
      }
      title={t('pages.groups.title')}
    />
  )
}

export default Layout
