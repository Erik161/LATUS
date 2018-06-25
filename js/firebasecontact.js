
  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

//MODIFICACION DE TODO EL CODIGO
document.getElementById('contactForm'); // Obtenemos las referencia al formulario

if(form){//si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
 form.addEventListener('submit', contactForm); //Al momento de enviar el formulario, ejecuta la función "contactForm"
}

fuction contactForm(event){
  event.preventDefault(); //Prevenimos el comportamiento por defecto de un formulario (Enviar por URL los parametros) 
  
  const name =  document.getElementById('name');//Obtenemos la referencia  a cada uno de nuestros elementos del formulario
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');
  const data = {
  'name': name.value,
  'email': email.value,
  'phone': phone.value,
  'message': message.value  
  }; //Creamos un objecto con todos los elementos de nuestro formulario.
  saveContactForm(data); //Enviamos la informacion obtenida por el usuario a la funcion que encarga de guarfar la informacion en firebase
  form.reset(); //borramos todos los campos.
}

fuction saveContactForm(data){
  firebase.database().ref('contact').push(data)//Hacemos referencia al metodo database de el SDK y hacemos referencia el nombre del objeto que contendra nuestros registros y empujamos los nuevos envios de datos.
  .then(fuction(){
        alert('Mensaje Guardado');//Si la peticion es correcta y almaceno los datos mostramos un mensaje al usuario.  
        })
  .catch(fuction(){
        alert('Mensaje No Guardado'); //En caso de ocurrir un error le mostramos al usuario que ocurrio un error.
        });      
};
