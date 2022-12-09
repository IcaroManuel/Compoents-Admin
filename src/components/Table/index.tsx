import React from 'react'
import { useTable, Column } from 'react-table'

import { BaseEntityDTO } from '@/dtos/generics'
import { Container } from './styles'

export type TableProps<T extends object> = {
  columns: Column<T>[]
  data: T[]
  getRowId?: (item: T) => string
}
const defaultGetId = (item: BaseEntityDTO) => item.id
function Table<T extends BaseEntityDTO>({
  columns,
  data,
  getRowId
}: TableProps<T>) {
  const getId = getRowId || defaultGetId
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, getRowId: getId })

  return (
    <Container {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          const { key: headerGroupKey, ...headerGroupProps } =
            headerGroup.getHeaderGroupProps()
          return (
            <tr key={headerGroupKey} {...headerGroupProps}>
              {headerGroup.headers.map((column) => {
                const { key: headerKey, ...headerProps } =
                  headerGroup.getHeaderGroupProps()
                return (
                  <th key={headerKey} {...headerProps}>
                    {column.render('Header')}
                  </th>
                )
              })}
            </tr>
          )
        })}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          const { key: rowKey, ...rowProps } = row.getRowProps()
          return (
            <tr key={rowKey} {...rowProps}>
              {row.cells.map((cell) => {
                const { key: cellKey, ...cellProps } = cell.getCellProps()
                return (
                  <td key={cellKey} {...cellProps}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </Container>
  )
}

export default Table
