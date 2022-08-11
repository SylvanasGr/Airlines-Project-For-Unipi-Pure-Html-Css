// // // todo: change the path to the corresponding urls.

var searchAction = document.getElementById("search") || null;
if (searchAction) {
  searchAction.action =
    "http://localhost/php_labs/Airlines-Project-For-Unipi-Pure-Html-Css/ticket/search.php";
}

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
const dfrom = document.getElementById("dfrom");
const dto = document.getElementById("dto");
const card = document.getElementById("card");
const cld = document.getElementById("cld");
const cardxexpdate = document.getElementById("cardxexpdate");
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

};

const latinMsg =
  "This field must contains only latin characters and it's required.";

const validateInputs = (e) => {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const postalValue = postal.value.trim();
  const phoneValue = phone.value.trim();
  const cldValue = cld.value.trim();
  const cardValue = card.value.trim();
  const cardxexpdateValue = cardxexpdate.value.trim();
  const birthdateValue = birthdate.value.trim();

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

  if (
    emailValue == "" ||
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailValue) 
  ) {
    setError(
      email,
      "Email must contains something like this :  example@whatever.com"
    );
  } else {
    setSuccess(email);
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

  
  if (cldValue == "" || !/^\d+$/.test(cldValue)) {
    setError(cld, "Card Last 3 Digits  field must contains 3 digits without letters.");
  }else{
    setSuccess(cld);
  }

  if (dfrom.value == dto.value) {
        setError(
      dto,
      "Cant fly for the same destination:" +
        "example : Crete - Crete is not acceptable." +
        "example : Crete - Naxos is accepatable");
  } else {
    setSuccess(dto);
  }

  if (cardValue == "" || !/^\d+$/.test(cardValue)) {
    setError(card, "Card field must contains 16 digits without letters.");
  } else {
    setSuccess(card);
  }


  if(cardxexpdateValue ==""){
    setError(cardxexpdate,"Please put a valid date");
  }else{
    setSuccess(cardxexpdate);
  }

  if(birthdateValue ==""){
    setError(birthdate,"Please put a valid date");
  }else{
    setSuccess(birthdate);
  }

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

};
