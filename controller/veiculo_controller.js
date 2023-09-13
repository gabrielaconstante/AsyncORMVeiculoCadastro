import connect from '../config/connection.js'

let veiculo = {};
const dbConnection = await connect();

// Busca por todos os veiculos
veiculo.all = async function (req, res) {
  try {
    let veiculos = await dbConnection.query("SELECT * FROM veiculo;");
    res.json(veiculos);
  } catch (erro) {
    console.log("erro..........", erro);
  }
}



// Insere veiculo na tabela (Create do CRUD)
veiculo.create = async function (req, res) {
  try {
    let novo_veiculo = req.body;
    let sql = "INSERT INTO veiculo (placa, modelo, preco) VALUES (?, ?, ?);"
    let values = [novo_veiculo.placa, novo_veiculo.modelo, novo_veiculo.preco]
    let result = await dbConnection.query(sql, values);
    res.send({
      status: 'Inserção Efetuada com Sucesso',
      result: result
    });
  } catch (erro) {
    console.log("erro..........", erro);
  }
}

// Atualização dos dados do veiculo a partir da placa (Update do CRUD)
veiculo.update = async function (req, res) {
  try {
    let placa = req.params.placa;
    let veiculo_atualizado = req.body;
    let sql = 'UPDATE veiculo SET modelo = ?, preco = ? WHERE placa = ?';
    const values = [veiculo_atualizado.modelo, veiculo_atualizado.preco, placa];
    var result = await dbConnection.query(sql, values);
    res.send({
      status: "Atualização do veiculo " + placa + " Efetuada",
      result: result
    });
  } catch (erro) {
    console.log("erro..........", erro);
  }
}

// Exclusão de veiculo a partir da placa (Delete do CRUD)
veiculo.delete = async function (req, res) {
  try {
    let placa = req.params.placa;
    var sql = 'DELETE FROM veiculo WHERE placa = ?;';
    var result = await dbConnection.query(sql, [placa]);
    res.send({
      status: "A Exclusão do veiculo " + placa + " Foi Realizada!",
      result: result
    });
  } catch (erro) {
    console.log("erro..........", erro);
  }
}

export { veiculo };
export { modelo };