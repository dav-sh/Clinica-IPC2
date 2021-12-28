const express = require('express')  //Aqui requerimos la libreria exprexx
const app = express()
const port = process.env.PORT || 5000   //variable de entorno, el proveedor nos va a decir que puerto
const path = require('path');
//paquete MySQL
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
//Aqui vienen los endpoints, algunos necesitaran autorizacion y otros no

app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname + '/public/css')));
app.use('/js', express.static(path.join(__dirname + '/public/js')));
app.use('/png', express.static(path.join(__dirname + '/public/img')))

/** MySQL */
//variables de entorno
const mysqlhost = process.env.HOST || '192.168.1.11';  //Aqui va mi ip
const mysqluser = process.env.USER || "super";
const mysqlpass = process.env.PASS || "root";
const mysqldatabase = process.env.DATABASE || 'proyectoclinica';


//importamos la conexion  a la bdd
const database = require('./database');

/*
//conexion con la BDD
const con = mysql.createConnection({
    host: mysqlhost,
    user: mysqluser,
    password: mysqlpass,
    database: mysqldatabase


});

//PROBAMOS LA CONEXION DE LA bdd 

con.connect(function (err){

    if(err)throw err;
    console.log("conectado a la BDD");
});

*/



//no c muy bien para que sirve jajaa


app.get('/bd',async(req, res) => {
    console.log(" entrando a index de view");
    var user = "conejo";
    await database.getUser(user).then((val) => {
        console.log(val)
    }).catch((err)=>{
        console.log(err)
    })

});





/*
export function devuelveQuery(string){
    var resultado = null;
    con.query(string,function(err, results, fields){
        if(err)throw err;
        resultado = results;
    });
    return resultado; 
}

*/



app.get('/', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/index.html')); 
    
});  //conjunto de reglas


//administrador
app.get('/login_adm', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/login_adm.html')); 

});

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




//secretaria

app.get('/menu_sec', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/menu_sec.html')); 
    
});  


app.get('/login_sec', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/login_sec.html')); 
    
});  

app.get('/reg_nw_sec', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/reg_nw_sec.html')); 
    
});  









//laboratorista

app.get('/heces', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/heces.html')); 
    
});  //conjunto de reglas


app.get('/orina', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/orina.html')); 
    
});  //conjunto de reglas



app.get('/hematologia', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/hematologia.html')); 
    
});  //conjunto de reglas


app.get('/menu_lab', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/menu_lab.html')); 
    
});  //conjunto de reglas


app.get('/login_lab', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/login_lab.html')); 
    
});  //conjunto de reglas


app.get('/analisis_lab', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/analisis_lab.html')); 
    
});  //conjunto de reglas




app.listen(port, () => console.log(`Example app listening on port ${port}!`))




