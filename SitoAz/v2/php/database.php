<?php
$host="localhost";
$userid="root";
$password="root";

mysql_connect($host, $userid, $password) or die("qualcosa non va nella connessione ". mysql_error());

mysql_select_db("camper") or die("qualcosa non va nel database ". mysql_error());

$sql="select * from camper 	order by marca";
echo("<div id=\"pippo\">$sql</div>");
$risultato=mysql_query($sql);
$numero=mysql_num_rows($risultato);
if ($numero!=0) {
	echo("Nella tabella ci sono $numero record<br />");
	echo("<table border='1'>\n");
	echo("<tr><th>id-camper</th><th>Modello</th><th>Anno</th></tr>");
	while ($riga=mysql_fetch_array($risultato))
	{
	echo("<tr>\n");
	echo("<td>$riga[idcamper]</td>
		  <td>$riga[marca]</td>\n
		  <td>$riga[anno]</td>\n");
	echo("</tr>\n");
	}
	echo("</table>\n");
	}
else {
	echo("Non ci sono record!");
}
?>
