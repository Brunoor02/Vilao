import 'dotenv/config'
import vilaoControler from './controller/vilaoController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.use(vilaoControler);


server.listen(process.env.PORT, ()=> console.log(`API conectada na porta ${process.env.PORT}`))