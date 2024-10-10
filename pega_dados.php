<?php
// Recebendo os dados JSON da requisição POST
$json = file_get_contents('php://input');

// Decodificando o JSON em um array PHP
$data = json_decode($json, true);

// Acessando os valores individuais
$data_compra = $data['dataCompra'];
$valor_compra = $data['valorCompra'];
$code_centro_custo = $data['codeCentroCusto'];
$name_centro_custo = $data['nameCentroCusto'];
$data_parcela = $data['dataParcela'];
$description = $data['description'];
$qtd_parcela = $data['qtdParcela'];

$data = str_replace("/", "-", $dataTexto);
$data_compra = date('Y-m-d', strtotime($data));
 
// $nome = $data['nome'];
// $email = $data['email'];
// $idade = $data['idade'];

// // Você pode retornar uma resposta JSON para o JavaScript
// $response = array(
//     'status' => 'success',
//     'message' => 'Dados recebidos com sucesso!',
//     'dados' => array(
//         'nome' => $nome,
//         'email' => $email,
//         'idade' => $idade
//     )
// );

// Enviando a resposta como JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
