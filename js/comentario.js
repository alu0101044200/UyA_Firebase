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
 //Referencia a la base de datos
  var messageRef = firebase.database().ref('messages');

  //Listen for form submit
  document.getElementById('dejarcomentario').addEventListener('submit', submitForm);

  //SubmitForm
  function submitForm(e) {
      e.preventDefault();

      //Coger valores
      var nombre = document.getElementById('nombre').value;
      var apellido = document.getElementById('apellido').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('telefono').value;
      var mensaje = document.getElementById('comentario').value;
      var todoCorrecto = true;
      var aux1 = email.indexOf('@'); //Posicion del primer @
      var aux2 = email.indexOf('.', aux1)-aux1; //Distancia del primer punto encontrado despues del @
      var auxtam = email.length - email.indexOf('.', aux1); //Distancia desde el final hasta el primer punto

      
      if(nombre.length < 1){
        
        document.querySelector(".alert_nombre").style.display = 'block';
        todoCorrecto=false;
      }

      if (apellido.length < 1){
      
        document.querySelector(".alert_apellido").style.display = 'block';
        todoCorrecto=false;
    }

    if (aux1 < 2 ||  aux2 <= 2 || auxtam <= 2){
        
        document.querySelector(".alert_email").style.display = 'block';
        todoCorrecto=false;
    }

    if (mensaje.length < 1){
     
      document.querySelector(".alert_comentario").style.display = 'block';
      todoCorrecto=false;
    }

    if(todoCorrecto == true){
        //Guardamos el mensaje
        guardarMensaje(nombre, apellido, email, phone, mensaje);
        //clear form
        document.getElementById('dejarcomentario').reset();
        document.querySelector(".alert_nombre").style.display = 'none';
        document.querySelector(".alert_apellido").style.display = 'none';
        document.querySelector(".alert_email").style.display = 'none';
        document.querySelector(".alert_comentario").style.display = 'none';
        document.querySelector(".alert_correcto").style.display = 'block';

    }
     
      //clear form
      document.getElementById('dejarcomentario').reset();

      
    }


  function guardarMensaje(nombre, apellido, email, phone, mensaje){
      var nuevoComentarioREF = messageRef.push();
      nuevoComentarioREF.set({
          nombre: nombre,
          apellido: apellido,
          email: email,
          phone: phone,
          mensaje: mensaje
          
        });

        
  }
