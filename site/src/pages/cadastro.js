import { useState } from 'react';
import { Link } from 'react-router-dom'
import { colocarVilao } from '../API/vilaoAPI';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [maldade, setMaldade] = useState('');
    const [poder, setPoder] = useState(false);

    async function click() {

        try {
            const r = await colocarVilao(nome, maldade, poder);
    
            alert('Vilao inserido com sucesso')
        } catch (err) {
            alert(err.response.data.erro)
        }


    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Cadastro de vilão
                </h1>

                <div>
                    <input type="text" placeholder='Nome do vilão' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder='Nivel de maldade do vilão' value={maldade} onChange={e => setMaldade(e.target.value)} />
                </div>
                <div>
                    <input type="checkbox" placeholder='O vilão tem poder?' value={poder} onChange={e => setPoder(e.target.checked)} />
                </div> 

                <Link to='/'>Voltar</Link>
                <br/>
                <button onClick={click}>Cadastrar Vilão</button>
            </header>
        </div>
    );
}


