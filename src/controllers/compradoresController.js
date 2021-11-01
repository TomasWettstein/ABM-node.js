const controller = {};

//Creamos una funcion que es parte del objeto controller, el parametro conn es la conexion que traemos del metodo getConnection
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM compradores', (err, rows) => {
            console.log(rows)
            if(err){
                res.json(err);
            }
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
            if(err){
                res.json(err);
            }
            console.log(comprador)
            res.redirect('/');
        })
    })
}
controller.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query(`DELETE FROM compradores WHERE id = ?`, [id], (err, eliminado) => {
            if(err){
                res.json(err);
            }
            res.redirect('/');
        })
    })
}


//Exportamos el controlador
module.exports = controller;