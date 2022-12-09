import styled from 'styled-components'

export const Container = styled.label`
  display: grid;
  grid-gap: 4px;
  margin: 0.5rem 0;
`

export const Label = styled.span<{ required?: boolean }>`
  font-size: ${({ theme }) => theme.sizes.fontMedium};
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.text};

  &::after {
    content: '${({ required }) => (required ? ' *' : '')}';
    color: ${({ theme }) => theme.colors.error}
  }
}
`

export const TextInput = styled.input`
  padding: 0.8rem;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.fontMedium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  background-color: transparent;
`
