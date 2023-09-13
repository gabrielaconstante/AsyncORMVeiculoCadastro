import express from 'express'
import {veiculo} from '../controller/veiculo_controller.js'

let router = express.Router()
router.get('/veiculo', veiculo.all);
router.post('/veiculo', veiculo.create)
router.put('/veiculo/:placa', veiculo.update)
router.delete('/veiculo/:placa', veiculo.delete);

//PARA CADA OPERAÇÃO CRUD UMA NOVA ROTA TEM QUE SER DECLARADA
//...
export {router}