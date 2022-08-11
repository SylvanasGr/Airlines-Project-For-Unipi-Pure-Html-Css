<?php
$cn = pg_connect("host=localhost port=5432 dbname=tickets user=postgres password=pass");
if ($cn) {
    echo "<hr><br>";
    echo  "\n Connected to DB ";
    echo "<hr><br>";
} else {
    die("<br>Failed, reason: check db configurations.");
}


$email = $_POST['login-email'];
$password = $_POST['login-password'];


$sql = "select * from users_logs where email = '$email' and password = '$password' and repeat_password = '$password'";
$rs = pg_query($cn, $sql) or die("Cannot execute query, probably because you try to save the same user twice. : $sql\n");
while ($row = pg_fetch_assoc($rs)) {
    echo
    "<table border='2' width='100%' cellspacing='0' style='text-align: center;'> 
    <tr>
    <th>Email</th>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Address</th>
    <th>AddressNo</th>
    <th>Phone</th>
    <th>State</th>
    <th>Postal</th>
    <th>CardType</th>
    <th>Card</th>
    </tr>
    <tr>
    <td>{$row['email']}</td>
    <td>{$row['firstname']}</td>
    <td>{$row['lastname']}</td>
    <td>{$row['address']}</td>
    <td>{$row['addressno']}</td>
    <td>{$row['phone']}</td>
    <td>{$row['state']}</td>
    <td>{$row['postal']}</td>
    <td>{$row['cardtype']}</td>
    <td>{$row['card']}</td>
    </tr>
    </table>";
}
pg_close($cn);

echo "
<br>
<br>
<br>
<br>
<a style='text-decoration: none; font-size: 35px; color:salmon; ' href='../index.html'>Click here to go to the Home Page</a>";