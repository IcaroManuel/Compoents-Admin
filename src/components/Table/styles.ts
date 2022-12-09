import styled from 'styled-components'

export const Container = styled.table`
  display: table;
  border-spacing: 2px;
  border-color: ${({ theme }) => theme.colors.border};
  border-collapse: collapse;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  width: 100%;
  max-width: 100%;
  font-size: ${({ theme }) => theme.sizes.fontMedium};
  font-family: ${({ theme }) => theme.fonts.text};

  thead {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.title};
    border-bottom: 2px ${({ theme }) => theme.colors.border} solid;
  }
  thead tr th,
  tbody tr td {
    text-align: left;
    padding: 24px;
  }
  tbody tr td {
    color: ${({ theme }) => theme.colors.text};
  }
`
