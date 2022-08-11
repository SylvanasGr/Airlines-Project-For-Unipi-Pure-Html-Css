
document.getElementById("login").style.display='none';
document.getElementById("create").style.display='none';

 function showLogin(){
  document.getElementById("login").style.display='block';
  document.getElementById("create").style.display='none';

}

function showCreate(){
  document.getElementById("login").style.display='none';
  document.getElementById("create").style.display='block';
}

const loginForm = document.getElementById("login");
const createForm = document.getElementById("create");
const le = document.getElementById("login-email");
const lp = document.getElementById("login-password");
const ce = document.getElementById("create-email");
const cp = document.getElementById("create-password");
const crp = document.getElementById("create-repeat-password");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const address = document.getElementById("address");
const addressNo = document.getElementById("addressNo");
const postal = document.getElementById("postal");
const phone = document.getElementById("phone");
const card = document.getElementById("card");
const latinValidation = !/^[a-zA-Z]+$/;

loginForm.addEventListener("submit", (e) => {
    validateLogin(e);
});

createForm.addEventListener("submit", (e) => {
  validateCreate(e);
});

let sending = [];
const validateLogin = (e) => {
  const emailValue = le.value.trim();
  const passwordValue = lp.value.trim();

  if (
    emailValue == "" ||
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailValue
    )
  ) {
    setError(
      le,
      "Email must contains something like this :  example@whatever.com"
    );
  } else {
    setSuccess(le);
  }

  if (
    passwordValue == "" ||
    !/(?=.*\d)/.test(passwordValue) ||
    !/(?=.*[a-z])/.test(passwordValue) ||
    !/(?=.*[A-Z])/.test(passwordValue)
  ) {
    setError(lp, "Wrong password or email is not found.");
  } else {
    setSuccess(lp);
  }

  if (sending.length === 0) {
    if (loginForm) {
      loginForm.action = "http://localhost/php_labs/Airlines-Project-For-Unipi-Pure-Html-Css/user/user-login.php"
    }
  } else {
    e.preventDefault();
    sending = [];
  }
};

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
};

const latinMsg =
  "This field must contains only latin characters and it's required.";

const validateCreate = (e) => {
  const emailValue = ce.value.trim();
  const passwordValue = cp.value.trim();
  const repeatPasswordValue = crp.value.trim();
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const addressValue = address.value.trim();
  const addressNoValue = addressNo.value.trim();
  const postalValue = postal.value.trim();
  let phoneValue = phone.value.trim();
  const cardValue = card.value.trim();
  const stateValue = document.getElementById("state").value;


  if ( firstnameValue == "" || !/^[a-zA-Z]+$/.test(firstnameValue) ) {
    setError(firstname, latinMsg);
  } else {
    setSuccess(firstname);
  }

  if (lastnameValue == "" || !/^[a-zA-Z]+$/.test(lastnameValue) ) {
    setError(lastname, latinMsg);
  } else {
    setSuccess(lastname);
  }

  
  if (addressValue == "" || !/^[a-zA-Z]+$/.test(addressValue) ) {
    setError(address, latinMsg);
  } else {
    setSuccess(address);
  }

  if (addressNoValue == "" ||  !/^\d+$/.test(addressNoValue)) {
    setError(addressNo, "At least one number");
  } else {
    setSuccess(addressNo);
  }

  if (
    emailValue == "" ||
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailValue
    )
  ) {
    setError(
      ce,
      "Email must contains something like this :  example@whatever.com"
    );
  } else {
    setSuccess(ce);
  }

  if (
    passwordValue == "" ||
    !/(?=.*\d)/.test(passwordValue) ||
    !/(?=.*[a-z])/.test(passwordValue) ||
    !/(?=.*[A-Z])/.test(passwordValue)
  ) {
    setError(cp, "Wrong password format or wrong password of the email : " + emailValue);
  } else {
    setSuccess(cp);
  }

  if (
    passwordValue !== repeatPasswordValue
  ) {
    setError(crp, "Repeat password doesn't match.");
  } else {
    setSuccess(crp);
  }

  if (phoneValue == "" || !/^\d+$/.test(phoneValue)) {
    setError(phone, "Postal field must contains 10 digits without letters.");
  } else {
    setSuccess(phone);
  }

  if (postalValue == "" || !/^\d+$/.test(postalValue)) {
    setError(postal, "Postal field must contains 5 digits without letters.");
  } else {
    setSuccess(postal);
  }

  if (cardValue == "" || !/^\d+$/.test(cardValue)) {
    setError(card, "Card field must contains 16 digits without letters.");
  } else {
    setSuccess(card);
  }


  if(stateValue == 'Athens'){
    document.getElementById("phoneee").innerHTML = "Phone Number: (+30)";
    if(phoneValue){
      var temp = phoneValue;
      phoneValue = "30".concat(temp);
    }
  }else{
    document.getElementById("phoneee").innerHTML = "Phone Number: ";
  }


  if (sending.length === 0) {
    if (createForm) {
      createForm.action = "http://localhost/php_labs/Airlines-Project-For-Unipi-Pure-Html-Css/user/user-create.php";
    }
  } else {
    e.preventDefault();
    sending = [];
  }
};

function onResetLogin() {
  document.getElementById("login").reset();
  errorElement.innerText = null;
}

function onResetCreate() {
  document.getElementById("create").reset();
  errorElement.innerText = null;
}

function onPrint() {
  window.print();
}