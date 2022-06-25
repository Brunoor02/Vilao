import { Link } from 'react-router-dom'
import { useState } from 'react';
import { todosOsViloes } from '../API/vilaoAPI';
import { useEffect } from 'react';


export default function Viloes() {
    const [vilaoo, setVilaoo] = useState([])

    async function carregarTodosViloes() {
        const resp = await todosOsViloes();
        setVilaoo(resp);
    }

    useEffect(() => {
        carregarTodosViloes();
    }, [])

    return (
        <main>
            <section>

                {vilaoo.map(item =>


                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>VILÃO</th>
                                <th>MALDADES</th>
                                <th>SUPER PODER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vilaoo.map(item =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.maldade}</td>
                                    <td>{item.poder}</td>
                                </tr>

                            )}



                        </tbody>
                    </table>



                )}

                <Link to={'/'}> Voltar </Link>


            </section>
        </main>
    );

}