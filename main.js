var estado = "luna"; // Estado inicial

function cambiar() {
  var icoElement = document.getElementById("ico");

  if (estado === "luna") {
    icoElement.classList.remove("fa-moon");
    icoElement.classList.add("fa-sun");
    estado = "sol";
  } else {
    icoElement.classList.remove("fa-sun");
    icoElement.classList.add("fa-moon");
    estado = "luna";
  }
}


// formulario





$.validator.addMethod('notStartWith', function(value, element, param) {
  /*
  if (value.startsWith(param)){
      return false;
  } else {
      return true;
  }
  */
  return !value.startsWith(param)
});


$(document).ready(function () {
  console.log('ready');
  $('#registrationForm').validate({
      rules: {
        
          emailInput: {
              required: true,
              email: true
          },
          passInput: {
              required: true,
              minlength: 6
          },
          addressInput: {
              required: true,
          },
          cityInput: {
              required: true,
          },
          postalCodeInput: {
              required: true,
          },
          countryInput: {
              required: true,
          },
      
  
          chkAcepto: {
              required: true
          }
      },
      messages: {
          nombreCompleto: {
              required: "Por favor ingrese su nombre completo",
              minlength: "El nombre debe ser de no menos de 4 caracteres",
              notStartWith: 'El nombre no debe comenzar con {0}'
          },
          password: {
              required: "Introduzca password",
              minlength: "El password debe contener por lo menos 6 caracteres"
          },
          confirmPassword: {
              required: "Confirme el password ingresado",
              minlength: "El password debe contener por lo menos 6 caracteres",
              equalTo: "Las contraseñas no coinciden"
          },
          comentarios: {
              required: "Ingrese comentarios"
          },
          email: "Por favor introduzca un email correcto",
          chkAcepto: "Por favor acepte los términos y condiciones"
      },
      errorElement: "small",
      errorClass: 'text-danger'
  });
});
$.validator.setDefaults({
  submitHandler: function () {
      alert("Todo perfecto!!!");

      //redirect to another page
      $(location).attr('href', 'index.html')
  }
});