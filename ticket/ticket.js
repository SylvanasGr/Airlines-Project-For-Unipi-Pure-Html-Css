// // // todo: change the path to the corresponding urls.

// var searchAction = document.getElementById("search") || null;
// if (searchAction) {
//   searchAction.action =
//     "http://localhost/php_labs/Airlines-Project-For-Unipi-Pure-Html-Css/ticket/search.php";
// }

const latinValidation = !/^[a-zA-Z]+$/;
const form = document.getElementById("myForm");
const errorElement = document.getElementById("error");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const birthdate = document.getElementById("birthdate");
const state = document.getElementById("state");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const postal = document.getElementById("postal");
const dfrom = document.getElementById("dfrom").value;
const dto = document.getElementById("dto").value;
let sending = [];

form.addEventListener("submit", (e) => {
  validateInputs(e);
});

function onReset() {
  document.getElementById("myForm").reset();
  errorElement.innerText = null;
}

function onPrint() {
  window.print();
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
  sending.push("error");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
  if (sending.length > 0) {
    sending.pop();
  }
};


const latinMsg = "This field must contains only latin characters and it's required.";

const validateInputs = (e) => {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const postalValue = postal.value.trim();
  // const phone = phone.value;

  if (!/^[a-zA-Z]+$/.test(firstnameValue) || firstnameValue == '') {
    setError(firstname, latinMsg);
  } else {
    setSuccess(firstname);
  }

  if (!/^[a-zA-Z]+$/.test(lastnameValue) || lastnameValue == '') {
    setError(lastname, latinMsg);
  } else {
    setSuccess(lastname);
  }

  if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue) || emailValue == ''){
    setError(email,"Email must contains something like this :  example@whatever.com");
  }else{
    setSuccess(email);
  }

  alert("posta value : " + postalValue);
  if(postalValue == '' || !/^\d+$/.test(postalValue)){
    setError(postal, "Postal field must contains 5 digits without letters.");
  }else{
    setSuccess(postal);
  }

  alert("df : " + dfrom + "dt : " + dto);
  if(dfrom == dto){
    alert("you cant.");
  }else{
    alert("goood!")
  }

  alert("total erros : " + sending.length)
  if (sending.length === 0) {
    var myFormAction = document.getElementById("myForm") || null;
    if (myFormAction) {
      myFormAction.action =
        "http://localhost/php_labs/Airlines-Project-For-Unipi-Pure-Html-Css/ticket/ticket.php";
    }
  } else {
    e.preventDefault();
    sending = [];
  }

  // if(lastname === '') {
  //     setError(email, 'Email is required');
  // } else if (!isValidEmail(emailValue)) {
  //     setError(email, 'Provide a valid email address');
  // } else {
  //     setSuccess(email);
  // }

  // if(passwordValue === '') {
  //     setError(password, 'Password is required');
  // } else if (passwordValue.length < 8 ) {
  //     setError(password, 'Password must be at least 8 character.')
  // } else {
  //     setSuccess(password);
  // }

  // if(password2Value === '') {
  //     setError(password2, 'Please confirm your password');
  // } else if (password2Value !== passwordValue) {
  //     setError(password2, "Passwords doesn't match");
  // } else {
  //     setSuccess(password2);
  // }
};
