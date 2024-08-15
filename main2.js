const btn = document.querySelector('.btn'); 
const btn2 = document.querySelector('.btn2'); 
const button = document.querySelector('.btn-signin'); 
const toUpper = require('ramda')

btn.addEventListener('click', cambio);
btn2.addEventListener('click', cambio1); 
button.addEventListener('click',getparameters); 


function cambio1(event) {
    event.preventDefault(); 
    signup( );
};

function cambio(event) {
    event.preventDefault();
    login( );  
};

function signup( ) {
    window.location.href = "signup.html";
}

function login( ) {
  window.location.href = "login.html";
}

function getFetch(body) {
  
}


function getparameters(){
    const user = document.getElementById('username');  
    const password = document.getElementById('password'); 
    var userValor = user.value;
    const body = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };

  fetch('http://localhost:5500/api/users/', {
    method: body.method,
    headers: body.headers,
    // body: JSON.stringify(userData)
  })

  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error al enviar los datos del usuario');
    }
  })
   
  .then(data => {
      const arreglo = data.body;
      console.log(arreglo)
      userValor = userValor.toUpperCase();
      var status = "ER"

      arreglo.forEach(function (element) {
        if (element.usuario == userValor) {
          status = "OK";
          console.log("Usuario registrado")
          return;
        }
      });

      if (status != "OK") {
        console.log("Error, Usuario no registrado")
      }
    })
}

