import { useTranslation } from 'react-i18next'
import { Container, LangText } from './styles'

const LangSwitch: React.FC = () => {
  const { i18n } = useTranslation()
  const language = i18n.language
  const handleChangeLanguage = async (language: string) => {
    localStorage.setItem('@avant/language', language)
    await i18n.changeLanguage(language)
  }

  return (
    <Container>
      <LangText
        bold
        isActive={language === 'ptBr'}
        onClick={() => handleChangeLanguage('ptBr')}
      >
        pt-br
      </LangText>
      <LangText
        bold
        isActive={language === 'en'}
        onClick={() => handleChangeLanguage('en')}
      >
        en
      </LangText>
      <LangText
        bold
        isActive={language === 'es'}
        onClick={() => handleChangeLanguage('es')}
      >
        es
      </LangText>
    </Container>
  )
}

export default LangSwitch
