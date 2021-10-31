//Vamos a utilizar un metodo de express llamado router, que devuelve un objeto al cual podemos incorporarle rutas
const express = require('express');
const router = express.Router();
//Requerimos el controlador
const compradoresController = require('../controllers/compradoresController');

//Le pasamos a la ruta el metodo que queramos ejecutar del controlador
router.get('/', compradoresController.list);
router.post('/add', compradoresController.add);

//Luego lo exportamos
module.exports = router;