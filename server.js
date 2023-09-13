import express from 'express'
//import connect from './config/connection.js'
import {router} from './routes/veiculos_routes.js'
let server = express();
console.log('tentar rodar')
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", router);
server.listen(7000, function () {
	console.log('port 7000')
});
