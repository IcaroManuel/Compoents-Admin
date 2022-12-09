import Text from '@/components/Text'
import styled from 'styled-components'

export const Container = styled.div`
  width: 240px;
  display: flex;
`

export const LangText = styled(Text)<{ isActive: boolean }>`
  & {
    text-align: center;
    padding: 2px 15px;
    width: 80px;
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.foreground : 'transparent'};
    cursor: pointer;
    border-top: ${({ theme, isActive }) =>
      isActive ? 'none' : `1.4px solid ${theme.colors.border}`};
    };
  }

  &:nth-child(1) {
    border-top-left-radius: 8px;
    border-left: ${({ theme, isActive }) =>
      isActive ? 'none' : `1.4px solid ${theme.colors.border}`};
    };
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-right: ${({ theme, isActive }) =>
      isActive ? 'none' : `1.4px solid ${theme.colors.border}`};
    };
  }
`
