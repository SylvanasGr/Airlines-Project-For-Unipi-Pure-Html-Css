<?php
$cn = pg_connect("host=localhost port=5432 dbname=tickets user=postgres password=pass");
if ($cn) {
    echo "<hr><br>";
    echo  "\n Connected to DB ";
    echo "<hr><br>";
} else {
    die("<br>Failed, reason: check db configurations.");
}


$email = $_POST['create-email'];
$password = $_POST['create-password'];
$repeat_password = $_POST['create-repeat-password'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$address = $_POST['address'];
$addressNo = $_POST['addressNo'];
$phone = $_POST['phone'];
$state = $_POST['state'];
$postal = $_POST['postal'];
$cardtype = $_POST['cardtype'];
$card = $_POST['card'];

$sql = "insert into users_logs(email,password,repeat_password,firstname,lastname,address,addressNo,phone,state,postal,cardtype,card)
values ('$email','$password','$repeat_password','$firstname','$lastname','$address','$addressNo','$phone','$state','$postal','$cardtype','$card');";
$rs = pg_query($cn, $sql) or die("Cannot execute query, probably because you try to save the same user twice. : $sql\n");
pg_close($cn);

if($rs == true){
    echo "User :" .$firstname ." " .$lastname  ." saved succesfully.";
}

echo "
<br>
<br>
<br>
<br>
<a style='text-decoration: none; font-size: 35px; color:salmon; ' href='../index.html'>Click here to go to the Home Page</a>";
