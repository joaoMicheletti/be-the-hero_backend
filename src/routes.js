const express = require('express');

const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionControler');

const routes = express.Router();
//login
routes.post('/sessions', SessionController.create);
//listando 
routes.get('/ongs', OngsController.index);
//cadastrando
routes.post('/ongs', OngsController.create);

//listando casos especificos da ong
routes.get('/profile',ProfileController.index); 

//casos / incidents
//criando caso / incidents
routes.post('/incidents', IncidentController.create);
//listando casos / incidents 
routes.get('/incidents', IncidentController.index);

//excluindo caso / incidests
routes.delete('/incidents/:id', IncidentController.delete);
module.exports = routes;