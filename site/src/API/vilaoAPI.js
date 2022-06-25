import axios from "axios";
const api = axios.create({
    baseURL:'http://localhost:5000/' 
})

export async function colocarVilao(nome, maldade, poder){
    const resposta = await api.post ('/vilao', {
        nome:nome,
        maldade:maldade,
        poder:poder
    })
    return resposta.data;


}

export async function todosOsViloes(nome, maldade, poder){
    const resposta = await api.get ('/vilao');
    return resposta.data;


}