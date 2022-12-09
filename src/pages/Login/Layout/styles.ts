import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 0px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media (min-width: 768px) {
    padding: 40px 10px;
    min-width: 400px;
  }

  div {
    width: 100%;
    max-width: 480px;

    @media (min-width: 768px) {
      min-width: 400px;
    }

    h1 {
      text-align: center;
    }
  }
`
