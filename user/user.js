// // todo: change the path to the corresponding urls.

// var myFormAction = document.getElementById("myForm") || null;
// if (myFormAction) {
//   myFormAction.action =
//     "http://localhost/php_labs/Airlines-Project-For-Unipi-Pure-Html-Css/ticket/ticket.php";
// }

// pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"

function showError(errorElement, errorMessage) {
  document.querySelector("." + errorElement).classList.add("display-error");
  document.querySelector("." + errorElement).innerHTML = errorMessage;
}

function onSubmit() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var state = document.getElementById("state").value;
  var password = document.getElementById("password").value;
  // var birthdate = document.getElementById('birthdate').value;
  // var phone = document.getElementById('phone').value;
  // var email = document.getElementById('email').value;
  // var dt = document.getElementById('df').value;
  // var df = document.getElementById('dt').value;
  // var timeflight = document.getElementById('timeflight').value;
  // var cardtype = document.getElementById('cardtype').value;
  // var card = document.getElementById('card').value;
  // var carxexpdate = document.getElementById('carxexpdate').value;
  // var cardlastdigits = document.getElementById('cardlastdigits').value;
  if (!/^[a-zA-Z]+$/.test(firstname)) {
    showError("firstname-error", "Only latin characters accepted.");
  }
  if (!/^[a-zA-Z]+$/.test(lastname)) {
    showError("lastname-error", "Only latin characters accepted.");
  }
  if (!/^[a-zA-Z]+$/.test(state)) {
    showError("state-error", "Only latin characters accepted.");
  }
  if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)){
    showError("password-error" ,"The password must contains at least one lowercase,uppercase and one number too.")
  }
}

function onReset() {
  document.getElementById("myForm2").reset();
}

function onPrint() {
  window.print();
}
