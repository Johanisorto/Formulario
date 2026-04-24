<?php

$nombre = htmlspecialchars($_POST['nombre']);
$edad = (int) $_POST['edad'];

echo 'Hola, ' . $nombre . '. ';
echo ' Tienes ' . $edad . ' años. ';

?>