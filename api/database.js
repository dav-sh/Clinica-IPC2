const mysqlhost = process.env.HOST || '192.168.1.11';  //Aqui va mi ip
const mysqluser = process.env.USER || "super";
const mysqlpass = process.env.PASS || "root";
const mysql = require('mysql');



module.exports.getUser = (userIngresado) =>{
    const con = mysql.createConnection({
        host: mysqlhost,
        user: mysqluser,
        password: mysqlpass,
    });



    return new Promise((resolve, reject) =>{
        con.connect(function (err){
            if(err) return reject("algo paso, no se conecto a la bdd");
            console.log("conectado a la BDD");
            resolve("si se pudo")
        });

        
            console.log("Consultando");
    
            //hacemos una consulta a una BDD
            con.query('SELECT * FROM proyectoclinica.administrador', function(err, results, fields) {
                if(err)throw err;
                results.forEach(result => {
                    console.log(result);  //imprimimos el resultado
                });
            });  
    });
}