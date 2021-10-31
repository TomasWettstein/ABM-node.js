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

controller.add = (req, res) => {
    const datos = req.body;
    req.getConnection((err, conn) => {
        conn.query(`INSERT INTO compradores SET ?`, [datos], (err, comprador) => {
            console.log(comprador)
            res.redirect('/');
        })
    })
}

//Exportamos el controlador
module.exports = controller;