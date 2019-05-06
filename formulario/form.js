 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAnQrtddub3m-Iogt1gI9aXUOImIBfZPEI",
    authDomain: "uyaproyecto-2dbe9.firebaseapp.com",
    databaseURL: "https://uyaproyecto-2dbe9.firebaseio.com",
    projectId: "uyaproyecto-2dbe9",
    storageBucket: "uyaproyecto-2dbe9.appspot.com",
    messagingSenderId: "754046813172"
  };
  firebase.initializeApp(config);

const form = document.getElementById('formulariologin');

if(form){
    form.addEventListener('submit', formulario);
}

function formulario(event)
{
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;
    var todoCorrecto = true;
    var aux1 = email.indexOf('@'); //Posicion del primer @
    var aux2 = email.indexOf('.', aux1)-aux1; //Distancia del primer punto encontrado despues del @
    var auxtam = email.length - email.indexOf('.', aux1); //Distancia desde el final hasta el primer punto

    const data = {
        'nombre': nombre,
        'email': email,
        'contraseña' : contraseña

    };

    if (contraseña == null || contraseña.length < 6 ){
        alert ('La contraseña no puede estar vacía o tener menos de 6 caracteres de longitud');
        todoCorrecto=false;
    }

    if (aux1 < 2 ||  aux2 <= 2 || auxtam <= 2){
        alert ('El E-mail no puede estar vacío, tener menos de 8 caracteres de longitud o contener sólo espacios en blanco');
        todoCorrecto=false;
    }

    if(todoCorrecto == true){
        guardarFormulario(data);
        form.reset();
    }
   
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