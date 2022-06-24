import { Link } from 'react-router-dom'


export default function Home() {
  
    return (
      <main>

      <div>
        <header>
          <h1>
            Viloes
          </h1>
          <Link to={'/cadastro'}>Cadastrar Vilão</Link>
          <br/>
          <Link to={'/viloes'}>Consultar todos os Vilões</Link>
        </header>
      </div>
      </main>
    );
  }
  
