import { colocarVilao, todosOsViloes } from '../repository/vilaoRepository.js'

import { Router } from 'express'
const server = Router();

server.post('/vilao', async (req, resp) => {
    try {
        const inserirNovoVilao = req.body;

        const nVilao = await colocarVilao(inserirNovoVilao);

        resp.send(nVilao)

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/vilao', async (req, resp) =>{
    try {
        const r = await todosOsViloes();
        resp.send(r);
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


export default server;