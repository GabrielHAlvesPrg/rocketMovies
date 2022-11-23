import { Container, Profile } from './styles'
import { Input } from '../Input';
import { Link } from 'react-router-dom';


export function Header(){
  return(
    <Container>
      <Profile a="/">
        <h1>RocketMovies</h1>

        <Input id="inputHeader" />

        <div>
          <strong>Gabriel Henrique Alves</strong>
          <a src="#">sair</a>
        </div>

        <Link to="/profile">
          <img className='avatarImg' src="https://github.com/gabrielHAlvesPrg.png" alt="Foto do usuário"/>
        </Link>

      </Profile>      
    </Container>
  )

}