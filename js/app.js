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
    if(pw==pw_i && usuario==usuario_i){
        console.log('Las contraseñas SI coinciden');

        //window.location.href='./data.html'
        window.location.href='./menu.html'
    }

    else{
        console.log('El usuario o contraseña NO coincide');
    }
}


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