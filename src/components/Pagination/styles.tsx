import React from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export const Container = styled(ReactPaginate).attrs({
  containerClassName: 'pagination-container',
  pageClassName: 'page-item',
  pageLinkClassName: 'page-link',
  previousClassName: 'page-item page-next',
  previousLinkClassName: 'page-link',
  nextClassName: 'page-item page-next',
  nextLinkClassName: 'page-link',
  breakClassName: 'page-item',
  breakLinkClassName: 'page-link',
  pageRangeDisplayed: 3,
  marginPagesDisplayed: 1,
  previousLabel: <FiArrowLeft size="20px" />,
  nextLabel: <FiArrowRight size="20px" />
})`
  margin: 0 auto;
  display: flex;
  padding: 10px;
  gap: 10px;
  list-style: none;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.sizes.fontMedium};
  border: 1px solid ${({ theme }) => theme.colors.success};
  border-radius: 0.4rem;

  li {
    display: flex;
    width: fit-content;
  }

  li.break {
    align-items: center;
  }
  .page-item {
    border-radius: 4px;
    cursor: pointer;
  }

  .page-item:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .page-item.selected,
  .page-item.selected a {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.hovered};
  }

  .page-link {
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    font-weight: bold;
    padding: 10px 15px;
    min-width: 16px;
    display: flex;
    align-items: center;
  }

  .page-next {
    margin-right: 10px;
    .page-link {
      padding: 10px;
    }
  }

  .page-item.selected:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .page-item:hover {
    .page-link {
      color: ${({ theme }) => theme.colors.hovered};
    }
  }
`
