import Text from '@/components/Text'
import Input from '@/components/Input'
import Button from '@/components/Button'
import FormRow from '@/components/FormRow'

import { Container } from './styles'

const CategoryLayout: React.FC = () => {
  return (
    <Container>
      <Text>Nome</Text>
      <Input />
      <FormRow>
        <Button>Cancelar</Button>
        <Button primary>Enviar</Button>
      </FormRow>
    </Container>
  )
}

export default CategoryLayout
