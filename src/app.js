//Requerimos express
const express = require('express');
//Requimos modulo path de node.js este modulo se encarga de unir directorios
const path = require('path');
//Requiero modulo morgan
const morgan = require('morgan');
//Requiero modulo mysql
const mysql = require('mysql');
//Dentro de esta constate myconnection tengo la funcionalidad de este modulo
const myconnection = require('express-myconnection');


//Una vez requerido express lo inicializamos
const app = express();


//Configurar servidor, verifica si hay  un puerto en el SO o que escuche el 3000
app.set('port', process.env.PORT || 3000);
//Configurar el viewengine (Motor de plantillas), para poder utilizarlo
app.set('view engine', 'ejs');
//Le indicamos donde esta la carpeta views utilizando el modulo path
app.set('views', path.join(__dirname, 'views'));



//Configuramos los middlewares (Funciones que se ejecutan antes de que vengan las peticiones de los usuarios)
//MORGAN es una manera de mostrar mensajes por consola bastante simples a partir de las peticiones
app.use(morgan('dev'))

//Declaramos la coneccion a la base de datos.
app.use(myconnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'crud-node.js'

}, 'single'));

//Inicializamos el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})
