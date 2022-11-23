import { NoteItem } from '../../Components/NoteItem';
import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { Container, Content } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Tag } from '../../Components/Tag';
import { Link } from 'react-router-dom';

export function Create(){
  
  return(
    <Container>
      <Header />
        <Content>
          <FiArrowLeft/>   
          <Link to="/">Voltar</Link>

          <h1>Novo filme</h1>

          <div id="input">
            <Input type="text" placeholder="Titulo"/>
            <Input type="number" placeholder="Sua nota (de 0 a 5)"/>
          </div>

          <textarea placeholder='Observações:'></textarea>

          <h2>Marcadores</h2>

          <section>
            <div className='marcadores'>
              <NoteItem value="React" />
              <NoteItem isNew placeholder= "Novo marcador" />
            </div>
          </section>

          <Button className="excluirFilme" title="Excluir filme" />
          <Button className="salvarAlteracao" title="Salvar alteração" />

        </Content>
      
    </Container>
  )
} 