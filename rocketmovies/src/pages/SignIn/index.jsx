import { Container, Form, Background } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { FiMail, FiLock} from 'react-icons/fi'
import { Link } from 'react-router-dom';


export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
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

        <Button title="Entrar"/>


        <Link to="/register">Criar Conta</Link>

      </Form>

      <Background />

    </Container>
  )
}