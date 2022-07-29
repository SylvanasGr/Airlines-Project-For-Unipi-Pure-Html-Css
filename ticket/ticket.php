<?php
$cn = pg_connect("host=localhost port=5432 dbname=tickets user=postgres password=pass");
if ($cn) {
    echo "<hr><br>";
    echo  "\n Connected to DB ";
    echo "<hr><br>";
} else {
    die("<br>Failed, reason: check db configurations.");
}
// script for show all the values
// foreach ($_POST as $name => $value) {
//     echo "<br> Name: $name; Value: $value<br>";
// }

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$birthdate = $_POST['birthdate'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$state = $_POST['state'];
$postal = $_POST['postal'];
$df = $_POST['df'];
$dt = $_POST['dt'];
$timeflight = $_POST['timeflight'];
$cardtype = $_POST['cardtype'];
$card = $_POST['card'];
$carxexpdate = $_POST['carxexpdate'];
$cardlastdigits = $_POST['cardlastdigits'];

$sql = "insert into users_data(firstname,lastname,birthdate,phone,email,state,postal,df,dt,timeflight,cardtype,card,carxexpdate,cardlastdigits)
values ('$firstname','$lastname','$birthdate','$phone','$email','$state','$postal','$df','$dt','$timeflight','$cardtype','$card','$carxexpdate','$cardlastdigits');";
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




//run the script if you want to make some tests :) !
// CREATE TABLE IF NOT EXISTS public.users_data
//  (
//      firstname text COLLATE pg_catalog."default" NOT NULL,
//      lastname text COLLATE pg_catalog."default" NOT NULL,
//      birthdate text COLLATE pg_catalog."default" NOT NULL,
//      phone text COLLATE pg_catalog."default",
//      email text COLLATE pg_catalog."default"  NOT NULL,
//      state text COLLATE pg_catalog."default",
//     postal text COLLATE pg_catalog."default",
//     df text COLLATE pg_catalog."default",
//      dt text COLLATE pg_catalog."default",
//      timeflight text COLLATE pg_catalog."default",
//      cardtype text COLLATE pg_catalog."default",
//      card text COLLATE pg_catalog."default",
//      carxexpdate text COLLATE pg_catalog."default",
//      cardlastdigits text COLLATE pg_catalog."default",
//      CONSTRAINT users_data_pkey PRIMARY KEY (firstname, lastname, birthdate,email)
//  )