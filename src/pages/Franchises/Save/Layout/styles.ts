import styled from 'styled-components'
import { FiPlusCircle } from 'react-icons/fi'
import FormRow from '@/components/FormRow'

export const Container = styled.section`
  margin: 20px 0;
  display: grid;
  gap: 20px;
  justify-content: center;
  grid-template-columns: minmax(auto, 800px);

  h1 {
    text-align: center;
  }
`

export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em 0;
  gap: 1em;
`

export const ListSocialNetwork = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  & > span {
    cursor: pointer;
  }
`

export const ListWeekDay = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 7px;
  padding: 1em 0;
  text-align: center;
`

export const WeekRow = styled(FormRow)`
  align-items: center;
`

export const WeekRowButton = styled.div`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.colors.text};
  & > svg {
    cursor: pointer;
  }
`

export const ListAddress = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px 0;
  gap: 10px;
`

export const AddAddressIcon = styled(FiPlusCircle)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 32px;
  margin: auto;
`
