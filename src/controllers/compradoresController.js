const controller = {};

//Creamos una funcion que es parte del objeto controller, el parametro conn es la conexion que traemos del metodo getConnection
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM compradores', (err, rows) => {
            if(err){
                res.json(err);
            }
            console.log(rows);
            res.render('compradores',{
                data: rows
            })
        })
    });
};

//Exportamos el controlador
module.exports = controller;