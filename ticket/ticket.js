// todo: change the path to the corresponding urls.

var myFormAction = document.getElementById('myForm') || null;
if(myFormAction) {
    myFormAction.action = 'http://localhost/php_labs/Airlines-Project-For-Unipi-Pure-Html-Css/ticket/ticket.php';
}

var searchAction = document.getElementById('search') || null;
if(searchAction) {
    searchAction.action = 'http://localhost/php_labs/Airlines-Project-For-Unipi-Pure-Html-Css/ticket/search.php';
}

function onSubmit() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var state = document.getElementById('state').value;
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
    if(!/^[a-zA-Z]+$/.test(firstname) || !/^[a-zA-Z]+$/.test(lastname) || !/^[a-zA-Z]+$/.test(state) ){
        alert("Firstname,Lastname and State must contains ONLY latin characters");
    }


}

function onReset(){
    document.getElementById("myForm").reset();
}

function onPrint(){
    window.print();
}



