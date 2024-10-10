<?php 
    $dataTexto = "10/10/2024";
    $data = str_replace("/", "-", $dataTexto);
    echo date('Y-m-d', strtotime($data));

?>