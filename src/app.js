//Requerimos express
const express = require('express');
//Requimos modulo path de node.js este modulo se encarga de unir directorios
const path = require('path');
//Requiero modulo morgan
const morgan = require('morgan');
//Requiero modulo mysql
const mysql = require('mysql');
//Dentro de esta constante myconnection tengo la funcionalidad de este modulo
const myconnection = require('express-myconnection');


//Una vez requerido express lo inicializamos
const app = express();

//Importando rutas, de este manera tenemos todas las rutas del archivo compradores de la carpeta routes almacenadas en una variable.
const compradoresRutas = require('./routes/compradores');
const { urlencoded } = require('express');

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

//Desde el modulo de express, estamos requiriendo un metodo que nos va a permitir entender todos los datos que vengna desde el forulario, y ponemos extends false por que no vamos a enviar imagenes ni datos complicados
app.use(express.urlencoded({extended: false}));

//Routes, cada vez que un usuario valla a la ruta principal de nuestro servidor vamos a utilizar
app.use('/', compradoresRutas);

//Archivos estaticos
app.use(express.static(__dirname + '/public'));


//Inicializamos el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})
