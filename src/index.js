const express = require('express');
const routes = require('./routes')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(routes);

app.listen(3333); 

/**
 *  Rotas / recursos * 
 */

/**
 * Metodo HTTP:
 * 
 * GRT: Busca informaçoão do back-end
 * POST: Cria uma informação no back-end
 * PUT: Alterando uma informação no back-end 
 *  DELETE: Deletendo uma informação do back-end
 */

 /**
  * Tipos de paarametros:
  * 
  * Query parms: Parãmetros nomeados e enviados na rota apos o (?) (filtrods e paginação)
  * Route Parms: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, ultilizado para criar ou alterar recursos
  */

  /**
   * Bancos relacionais:
   * SQL: MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
   * Bancos nao relacionais:
   * NoSQL: MongoDB, CouchDB, etc  
   */

   /** SEcominicando com o Banco de dados no node 
    * Driver: Select * From Users
    *  Query Biulder: table('users').select('*').where()  by knexjs.org
    */

