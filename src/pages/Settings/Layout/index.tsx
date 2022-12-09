import React from 'react'
import { useTranslation } from 'react-i18next'

import Box from '@/components/Box'
import FormRow from '@/components/FormRow'
import Text from '@/components/Text'
import Title from '@/components/Text/Title'
import { GenericSet, StringSet } from '@/utils/types'
import { ThemeValue } from '@/providers/theme'

import { Container, Card } from './styles'

export type SettingsProps = {
  language: string
  setLanguage: StringSet
  theme: string
  setTheme: GenericSet<ThemeValue>
}
const SettingsLayout: React.FC<SettingsProps> = ({
  language,
  setLanguage,
  theme,
  setTheme
}) => {
  const { t } = useTranslation()
  return (
    <Container>
      <Title bold>{t(`pages.settings.title`)}</Title>
      <Box>
        <Text bold>{t('label.language')}</Text>
        <FormRow>
          <Card
            active={language === 'ptBr'}
            onClick={() => setLanguage('ptBr')}
          >
            {t('pages.settings.language.ptBr')}
          </Card>
          <Card active={language === 'es'} onClick={() => setLanguage('es')}>
            {t('pages.settings.language.es')}
          </Card>
          <Card active={language === 'en'} onClick={() => setLanguage('en')}>
            {t('pages.settings.language.en')}
          </Card>
        </FormRow>
        <Text bold>{t('label.theme')}</Text>
        <FormRow>
          <Card active={theme === 'light'} onClick={() => setTheme('light')}>
            {t('pages.settings.theme.light')}
          </Card>
          <Card active={theme === 'dark'} onClick={() => setTheme('dark')}>
            {t('pages.settings.theme.dark')}
          </Card>
        </FormRow>
      </Box>
    </Container>
  )
}

export default SettingsLayout
