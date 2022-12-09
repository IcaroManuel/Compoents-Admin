import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    strong {
      font-weight: 800;
    }
  }
  strong {
    font-weight: bold;
  }
  html {
    height: 100%;
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  button {
    cursor: pointer;
  }
`
