import styled from 'styled-components'
import noContent from '@/assets/img/no-content.svg'
import Button from '@/components/Button'

export const Container = styled.section`
  margin: 0 40px;
  display: grid;
  justify-content: center;
`

export const Content = styled.div`
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  min-width: 780px;
  height: fit-content;
  padding: 0 0 24px;
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-row-gap: 12px;
  align-items: center;
  padding: 24px 24px 16px;
`

export const PaginatorContainer = styled.footer`
  display: flex;
  padding-top: 1em;
`

export const NoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 0;
`

export const NoContentIcon = styled.img.attrs({
  src: noContent
})`
  width: 120px;
`

export const AddButton = styled(Button).attrs({
  primary: true
})`
  position: fixed;
  right: 40px;
  bottom: 40px;
`
