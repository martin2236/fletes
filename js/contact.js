

(function main(){
    
    document.getElementById("miFormulario").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir comportamiento por defecto del submit
        
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var telefono = document.getElementById('telefono').value;
        var mensaje = document.getElementById('mensaje').value;
    
        if (nombre.length > 5 && email.length > 5 && telefono.length > 5 && mensaje.length > 5) {
           
            var data = {}
            data.cliente = nombre;
            data.email = email;
            data.telefono= telefono;
            data.mensaje = mensaje; 
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (nombre.length > 5 && emailPattern.test(email) && telefono.length > 5 && mensaje.length > 5) {
                enviarEmail(data);
                
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Por favor, verifique el email ingresado.',
                });
              }

            
            
          } else {
            Swal.fire({
                title: 'Error!',
                text: 'Todos los campos deben tener más de 5 caracteres y no pueden estar vacíos.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
          }
      });
 })();

 function enviarEmail (data){
    var templateParams = {
        from_name: data.email,
        nombre: "fletes adrogue",
        number: data.telefono,
        reply_to: data.email,
        cliente: data.cliente,
        mensaje: data.mensaje,
    };

    emailjs.init("gs0RrVdc9fbTsb_i_");
    
    if(data){
        emailjs.send("service_6dljxth","template_d1olhaj",templateParams)
        .then(function(response) {
            Swal.fire({
                title: 'email enviado!',
                text: 'Gracias por su interés en breve nos pondremos en contacto con usted.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              })
              var nombre = document.getElementById('nombre').value;
              var email = document.getElementById('email').value;
              var telefono = document.getElementById('telefono').value;
              var mensaje = document.getElementById('mensaje').value;
              nombre = ''
              email=''
              telefono=''
              mensaje = ''
        }, function(error) {
            Swal.fire({
                title: 'Ups!',
                text: 'Ocurrió un error, por favor intentelo más tarde.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
           console.log('FAILED...', error);
        });
       }
 }

