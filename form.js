
/*function registrarse(email, contraseña, nombre)
{
    reg.createUser({
        email: email,
        contraseña: contraseña,
        nombre: nombre
    }, function(error, userData){
        if(error)
            alert("No se ha registrado");
        else
            alert("Te has registrado!! Bienvenido" + userData.uid);
    })
}
*/

const form = document.getElementById('formulariologin');

if(form){
    form.addEventListener('submit', formulario);
}

function formulario(event)
{
    event.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const contraseña = document.getElementById('contraseña');

    const data = {
        'nombre': nombre.value,
        'email': email.value,
        'contraseña' : contraseña.value

    };

    if(email)

    guardarFormulario(data);

    form.reset();
}

function guardarFormulario(data){
    var database = firebase.database();
    var referencia = database.ref('usuarios');

    referencia.push(data)

    
    .then(function(){
        alert('usuario guardado');
    })
    .catch(function(){
        alert('usuario no guardado');
    });
    
};