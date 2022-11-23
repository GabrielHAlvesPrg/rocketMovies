import { Container, Form, Background } from './styles';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';
import { FiMail, FiLock} from 'react-icons/fi'
import { FiArrowLeft } from 'react-icons/fi'

export function SignUp(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <div>
          <Input 
            className="input"
            placeholder="Nome"
            type="text"
            icon={FiMail} 
          />
        </div>

        <div>
          <Input 
            className="input"
            placeholder="E-Mail"
            type="text"
            icon={FiMail} 
          />
        </div>
        
        <div>
          <Input 
            className="input"
            placeholder="Senha"
            type="password"
            icon={FiLock}
          />
        </div>

        <Button title="Cadastrar"/>

        <a href="/"> 
          <FiArrowLeft />
          Voltar para o login
        </a>

      </Form>
      <Background />
    </Container>
  )
}