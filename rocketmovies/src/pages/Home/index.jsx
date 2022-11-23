import { FiPlus } from 'react-icons/fi'
import { Container, Content, Note, Points } from './styles';
import { Header } from '../../Components/Header';
import { Tag } from '../../Components/Tag';
import { Link } from 'react-router-dom';

export function Home(){
  return(
    <Container>
      <Header />
      <Content>
        <div>
          <h1>Meus filmes</h1>
          <Link to="/new"> 
            <FiPlus />
            Adicionar filme
          </Link>
        </div>
        
        <main>
        <Link to="Preview">
          <Note> 
            <h2>Interestelar</h2>

            <Points />

            <p> 
              Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. 
              Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, 
              acredita que seu quarto está assombrado por um fantasma...
            </p>
            
            <div>
              <Tag className="tag" title="Ficção Cientifica" />
              <Tag className="tag" title="Drama" />
              <Tag className="tag" title="Familia" />
            </div>       
            
          </Note>
        </Link>
        <Link to="Preview">
          <Note>
            <h2>Interestelar</h2>

            <Points />

            <p> 
              Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. 
              Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, 
              acredita que seu quarto está assombrado por um fantasma...
            </p>
            
            <div>
              <Tag className="tag" title="Ficção Cientifica" />
              <Tag className="tag" title="Drama" />
              <Tag className="tag" title="Familia" />
            </div> 
          
          </Note>
        </Link>
        </main>
        

      </Content>
    </Container>
  )
}