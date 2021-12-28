console.log('Iniciando app.js');



var nombre= "anonimo";
var usuario = "admin";
var pw = "root";


let contras = ()=>{
    console.log(usuario + ' : '+ pw);
}
contras();


let Registrar = ()=>{
    console.log('Iniciando registro');
    nombre = document.getElementById('r_nombre').value;
    usuario = document.getElementById('r_usuario').value;
    pw = document.getElementById('r_password').value;
    console.log('Nombre: '+ nombre);
    console.log('Usuario: '+ usuario);
    console.log('Contraseña: '+ pw);
}


let Iniciar = ()=>{

    console.log('Iniciando registro');
    let usuario_i = document.getElementById('usuario').value;
    let pw_i = document.getElementById('password').value;
    console.log('Usuario: '+ usuario_i);
    console.log('Constraseña: '+ pw_i);
    //var resultados = devuelveQuery('SELECT * FROM admnistrador');
    window.location.href='/menu';
    alert('Ingreso correctamente');

};


let RegNuevo = ()=>{
    console.log('Iniciando registro');
    let p_name = document.getElementById('p_name').value;
    let p_apellidos = document.getElementById('p_apellidos').value;
    let p_cui = document.getElementById('p_cui').value;
    let p_departamento = document.getElementById('p_departamento').value;
    console.log('Nombre: '+ p_name);
    console.log('Apellidos: '+ p_apellidos);
    console.log('CUI: '+ p_cui);
    console.log('Departamento: '+ p_departamento);
}





function init() {
    console.log('Iniciando registro');
    console.log('Usuario: '+ document.getElementById('usuario').value + 'ee');
    
}



function analisis() {
    var content = document.getElementById('analisis-content');

}


//admin
let inicio_adm = async () => {
    console.log("verificando datos");

    var data = { datos: 'datos' };

    const response = await fetch('/api/saludo')
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

    
    console.log('Iniciando registro');
    let usuario_i = document.getElementById('usuario').value;
    let pw_i = document.getElementById('password').value;
    console.log('Usuario: '+ usuario_i);
    console.log('Constraseña: '+ pw_i);
    //var resultados = devuelveQuery('SELECT * FROM admnistrador');
    window.location.href='/menu';
    alert('Ingreso correctamente');
    

};

//secre
let inicio_sec = async () => {
    console.log("verificando datos");

    var data = { datos: 'datos' };

    const response = await fetch('/api/saludo')
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

        console.log('Iniciando registro');
        let usuario_i = document.getElementById('usuario').value;
        let pw_i = document.getElementById('password').value;
        console.log('Usuario: '+ usuario_i);
        console.log('Constraseña: '+ pw_i);
        //var resultados = devuelveQuery('SELECT * FROM admnistrador');
        window.location.href='/menu_sec';
        alert('Ingreso correctamente');

};


//lab
let inicio_lab = async () => {
    console.log("verificando datos");

    var data = { datos: 'datos' };

    const response = await fetch('/api/saludo')
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

        console.log('Iniciando registro');
        let usuario_i = document.getElementById('usuario').value;
        let pw_i = document.getElementById('password').value;
        console.log('Usuario: '+ usuario_i);
        console.log('Constraseña: '+ pw_i);
        //var resultados = devuelveQuery('SELECT * FROM admnistrador');
        window.location.href='/menu_lab';
        alert('Ingreso correctamente');

};