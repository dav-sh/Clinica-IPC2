const express = require('express')  //Aqui requerimos la libreria exprexx
const app = express()
const port = process.env.PORT || 5000   //variable de entorno, el proveedor nos va a decir que puerto
const path = require('path');

//Aqui vienen los endpoints, algunos necesitaran autorizacion y otros no

app.use(express.static('public'));

app.use('/css', express.static(path.join(__dirname + '/public/css')));
app.use('/js', express.static(path.join(__dirname + '/public/js')));


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

app.get('/registro', (req, res) => 
{ 
    res.status(201).sendFile(path.join(__dirname, '../views/reg.html')); 

});  //conjunto de reglas


app.listen(port, () => console.log(`Example app listening on port ${port}!`))




