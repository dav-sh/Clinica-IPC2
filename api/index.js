const express = require('express')  //Aqui requerimos la libreria exprexx
const app = express()
const port = process.env.PORT || 5000   //variable de entorno, el proveedor nos va a decir que puerto
const path = require('path');

//Aqui vienen los endpoints, algunos necesitaran autorizacion y otros no

app.use(express.static('public'));

app.use('/css', express.static(path.join(__dirname + '/public/css')));
app.use('/js', express.static(path.join(__dirname + '/public/js')));
app.use('/png', express.static(path.join(__dirname + '/public/img')))

/** MySQL */
//variables de entorno
const mysqlhost = process.env.MYSQLHOST || 'localhost';  
const mysqluser = process.env.MYSQLUSER || "admin2"
const mysqlpass = process.env.MYSQLPASS || "root"

//paquete MySQL
const mysql = require('mysql');

//conexion con la BDD
const con = mysql.createConnection({
    host: mysqlhost,
    user: mysqluser,
    password: mysqlpass


});

//PROBAMOS LA CONEXION DE LA bdd 

con.connect(function (err){

    if(err)throw err;
    console.log("conectado a la BDD");
});


//no c muy bien para que sirve jajaa
app.get('/',async(req, res) => {
    console.log(" entrando a index de view");
    await setTimeout(() => {
        console.log("entrando 2 no c si es para sql xd");
        const con2 = mysql.createConnection({
            host: mysqlhost,
            user: mysqluser,
            password: mysqlpass

        });

        //prueba
        con2.connect(function (err){
            if(err){
                console.log("error al conectarse");
                return res.status(503).json({status: "error, no conectado"});
            }  
            else{
                
                    console.log("conectado");
                    return res.status(503).json({status: "conexion establecida"});
                }
            
        });


    },2500);
});



app.get('/', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/index.html')); 
    
});  //conjunto de reglas


app.get('/menu', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/menu.html')); 

});  //conjunto de reglas


app.get('/nuevo', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/reg_nw.html')); 

});  //conjunto de reglas

app.get('/registrate', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/reg.html')); 

});  //conjunto de reglas


app.get('/analisis', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/analisis.html')); 

});  //conjunto de reglas


app.listen(port, () => console.log(`Example app listening on port ${port}!`))




