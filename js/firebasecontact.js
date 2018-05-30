 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDn-EHla66uWMEDTiviv05tep_0Z9FHjDA",
    authDomain: "contact-form-latus.firebaseapp.com",
    databaseURL: "https://contact-form-latus.firebaseio.com",
    projectId: "contact-form-latus",
    storageBucket: "contact-form-latus.appspot.com",
    messagingSenderId: "485296532032"
  };
  firebase.initializeApp(config);

  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

    //Get Values
    var name = getInputval('name');
    var email = getInputval('email');
    var phone = getInputval('phone');
    var message = getInputval('message');

    //save Message 
   saveMessage(name, email, phone, message);
}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
  }

// Save message to firebase
function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
      message:message
    });
  }