<?php
$cn = pg_connect("host=localhost port=5432 dbname=tickets user=postgres password=pass");
if ($cn) {
    echo "<hr><br>";
    echo  "\n Connected to DB ";
    echo "<hr><br>";
} else {
    die("<br>Failed, reason: check db configurations.");
}


$email = $_POST['searchByEmail'];

$sql = "select * from users_data where email = '$email';";
$rs = pg_query($cn, $sql) or die("Cannot execute query, probably because you try to save the same user twice. : $sql\n");
while ($row = pg_fetch_assoc($rs)) {
    echo
    "<table border='2' width='100%' cellspacing='0' style='text-align: center;'> 
    <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Email</th>
    <th>BirthDate</th>
    <th>State</th>
    <th>From</th>
    <th>To</th>
    <th>TimeFlight</th>
    <th>CardType</th>
    <th>Card</th>
    <th>Card Exp Date</th>
    <th>Card Last Digits</th>
    </tr>
    <tr>
    <td>{$row['firstname']}</td>
    <td>{$row['lastname']}</td>
    <td>{$row['email']}</td>
    <td>{$row['birthdate']}</td>
    <td>{$row['state']}</td>
    <td>{$row['df']}</td>
    <td>{$row['dt']}</td>
    <td>{$row['timeflight']}</td>
    <td>{$row['cardtype']}</td>
    <td>{$row['card']}</td>
    <td>{$row['carxexpdate']}</td>
    <td>{$row['cardlastdigits']}</td>
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