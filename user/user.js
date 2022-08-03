document.getElementById("loginForm").style.display='none';
document.getElementById("createForm").style.display='none'

function showLogin(){
  document.getElementById("loginForm").style.display='block';
  document.getElementById("createForm").style.display='none'
}

function showCreate(){
  document.getElementById("loginForm").style.display='none';
  document.getElementById("createForm").style.display='block'
}


// // // todo: change the path to the corresponding urls.

// var searchAction = document.getElementById("search") || null;
// if (searchAction) {
//   searchAction.action =
//     "http://localhost/php_labs/Airlines-Project-For-Unipi-Pure-Html-Css/ticket/search.php";
// }

// const latinValidation = !/^[a-zA-Z]+$/;
const formLogin = document.getElementById("loginForm");
const lemail = document.getElementById("lemail");
const lpassword = document.getElementById("lpassword");
// const form = document.getElementById("createForm");
const errorElement = document.getElementById("error");
// const firstname = document.getElementById("firstname");
// const lastname = document.getElementById("lastname");
// const birthdate = document.getElementById("birthdate");
// const state = document.getElementById("state");
// const phone = document.getElementById("phone");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const repeatpassword = document.getElementById("repeatpassword");
// const postal = document.getElementById("postal");
// const dfrom = document.getElementById("dfrom");
// const dto = document.getElementById("dto");
// const card = document.getElementById("card");
// const cld = document.getElementById("cld");
// const cardxexpdate = document.getElementById("cardxexpdate");
let sending = [];
formLogin.addEventListener("submit", (e) => {
  validateInputsLogin(e);
})

form.addEventListener("submit", (e) => {
  validateInputsCreate(e);
});

function onReset() {
  document.getElementById("createForm").reset();
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

// const latinMsg =
//   "This field must contains only latin characters and it's required.";

const validateInputsCreate = (e) => {
  // const firstnameValue = firstname.value.trim();
  // const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const repeatpasswordValue = repeatpassword.value.trim();
  // const postalValue = postal.value.trim();
  // const phoneValue = phone.value.trim();
  // const cldValue = cld.value.trim();
  // const cardValue = card.value.trim();
  // const cardxexpdateValue = cardxexpdate.value.trim()

  // if ( firstnameValue == "" || !/^[a-zA-Z]+$/.test(firstnameValue) ) {
  //   setError(firstname, latinMsg);
  // } else {
  //   setSuccess(firstname);
  // }

  // if (firstnameValue == "" || !/^[a-zA-Z]+$/.test(lastnameValue) || lastnameValue == "") {
  //   setError(lastname, latinMsg);
  // } else {
  //   setSuccess(lastname);
  // }

  // if (
  //   emailValue == "" ||
  //   !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //     emailValue
  //   )
  // ) {
  //   setError(
  //     email,
  //     "Email must contains something like this :  example@whatever.com"
  //   );
  // } else {
  //   setSuccess(email);
  // }

  // if (passwordValue == "" || !/^\d+$/.test(passwordValue)) {
  //   setError(
  //     password,
  //     "Password must be not be null and must contains one lowercase,one uppercase and one digit."
  //   );
  // } else {
  //   setSuccess(password);
  // }

  // if (repeatpasswordValue == "" || !/^\d+$/.test(repeatpasswordValue)) {
  //   setError(
  //     repeatpassword,
  //     "Password must be not be null and must contains one lowercase,one uppercase and one digit."
  //   );
  // } else {
  //   setSuccess(repeatpassword);
  // }


  // if(passwordValue !== repeatpasswordValue){
  //   setError(repeatpassword,"Not same passwords");
  // }else{
  //   setSuccess(repeatpassword);
  // }

  // if (passwordValue === repeatpasswordValue && passwordValue !== "") {
  //   alert("true");
  // } else {
  //   alert("false");
  // }

  // if (phoneValue == "" || !/^\d+$/.test(phoneValue)) {
  //   setError(phone, "Postal field must contains 10 digits without letters.");
  // } else {
  //   setSuccess(phone);
  // }

  // if (postalValue == "" || !/^\d+$/.test(postalValue)) {
  //   setError(postal, "Postal field must contains 5 digits without letters.");
  // } else {
  //   setSuccess(postal);
  // }

  // if (cldValue == "" || !/^\d+$/.test(cldValue)) {
  //   setError(cld, "Card Last 3 Digits  field must contains 3 digits without letters.");
  // }else{
  //   setSuccess(cld);
  // }

  // if (dfrom.value == dto.value) {
  //       setError(
  //     dto,
  //     "Cant fly for the same destination:" +
  //       "example : Crete - Crete is not acceptable." +
  //       "example : Crete - Naxos is accepatable");
  // } else {
  //   setSuccess(dto);
  // }

  // if (cardValue == "" || !/^\d+$/.test(cardValue)) {
  //   setError(card, "Card field must contains 16 digits without letters.");
  // } else {
  //   setSuccess(card);
  // }

  // if(cardxexpdateValue ==""){
  //   setError(cardxexpdate,"Please put a valid date");
  // }else{
  //   setSuccess(cardxexpdate);
  // }
  alert(sending.length);
  if (sending.length === 0) {
    var myFormAction = document.getElementById("createForm") || null;
    if (myFormAction) {
      myFormAction.action =
        "http://localhost/php_labs/Airlines-Project-For-Unipi-Pure-Html-Css/ticket/ticket.php";
    }
  } else {
    e.preventDefault();
    sending = [];
  }
};

const validateInputsLogin = (e) => {

  const lemailValue = lemail.value.trim();
  const lpasswordValue = lpassword.value.trim();

  if (
    lemailValue == "" ||
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      lemailValue
    )
  ) {
    setError(
      lemail,
      "Email must contains something like this :  example@whatever.com"
    );
  } else {
    setSuccess(lemail);
  }

  if (lpasswordValue == "" || !/^\d+$/.test(lpasswordValue)) {
    setError(
      lpassword,
      "Password must be not be null and must contains one lowercase,one uppercase and one digit."
    );
  } else {
    setSuccess(lpassword);
  }

  alert(sending.length);
  if (sending.length === 0) {
    var myFormAction = document.getElementById("createForm") || null;
    if (myFormAction) {
      alert("wraios re man");
      e.preventDefault();
  } else {
    e.preventDefault();
    sending = [];
  }
}
};
