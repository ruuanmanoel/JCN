<?php

$json = file_get_contents('php://input');

$data = json_decode($json, true);

$data_compra = $data['dataCompra'];
$valor_compra = $data['valorCompra'];
$code_centro_custo = $data['codeCentroCusto'];
$name_centro_custo = $data['nameCentroCusto'];
$data_parcela = $data['dataParcela'];
$description = $data['description'];
$qtd_parcela = $data['qtdParcela'];


$url = 'https://services.contaazul.com/finance-pro/v1/financial-events';

$data = array(
    "competenceDate" => $data_compra,
    "externalReference" => null,
    "negotiatorId" => null,
    "reference" => array(
        "origin" => "FINANCIAL_ENTRY"
    ),
    "status" => "PENDING",
    "value" => $valor_compra,
    "categoriesRatio" => array(
        array(
            "categoryId" => "8bc95e58-f955-439d-b5c8-3d8d03076704",
            "percentage" => 100,
            "value" => $valor_compra,
            "costCentersRatio" => array(
                array(
                    "value" => $valor_compra,
                    "percentage" => 100,
                    "costCenterId" => "1e7c8b48-828c-11ef-a892-5f6d72475897",
                    "name" => $name_centro_custo,
                    "code" => $code_centro_custo
                )
            )
        )
    ),
    "type" => "EXPENSE",
    "description" => "teste",
    "paymentCondition" => array(
        "value" => $valor_compra,
        "daysBetweenInstallments" => 30,
        "numberOfInstallments" => -1,
        "initialDueDate" => "2024-10-10",
        "financialAccountId" => "2ee87bdd-f09c-4abe-a49c-764f45ae8a39",
        "paymentMethod" => "BANKING_BILLET",
        "installments" => array(
            array(
                "index" => 1,
                "acquittances" => array(),
                "valueComposition" => array(
                    "grossValue" => $valor_compra,
                    "interest" => 0,
                    "fine" => 0,
                    "fee" => 0,
                    "discount" => 0
                ),
                "percentage" => 100,
                "dueDate" => $data_compra,
                "expectedPaymentDate" => $data_compra,
                "description" => $description,
                "paymentMethod" => "BANKING_BILLET",
                "financialAccount" => array(
                    "id" => "2ee87bdd-f09c-4abe-a49c-764f45ae8a39",
                    "version" => 0,
                    "bankInstitution" => "ITAU",
                    "bankInstitutionCode" => 341,
                    "name" => "Itaú",
                    "active" => true,
                    "type" => "CHECKINGACCOUNT",
                    "legacyId" => 40671558,
                    "parentId" => null,
                    "closingDate" => null,
                    "dueDate" => null,
                    "defaultAccount" => true,
                    "hasBankSlipConfiguration" => false,
                    "contaAzulDigital" => false,
                    "cashierAccount" => false,
                    "chargeRequestEnabled" => false,
                    "externalReference" => null,
                    "agency" => "1538",
                    "number" => "149053",
                    "wizardStatus" => null
                ),
                "financialAccountId" => "2ee87bdd-f09c-4abe-a49c-764f45ae8a39",
                "nsu" => null,
                "paid" => 0,
                "isCaPaymentType" => false
            )
        ),
        "lumpSum" => true,
        "nsu" => null
    ),
    "observation" => null,
    "attachments" => array(),
    "recurrence" => array(
        "active" => false,
        "recurrenceDue" => array(
            "dueReferenceDayType" => "DAY_OF_MONTH",
            "dueMonthDay" => "1",
            "dueWeekDay" => "MONDAY",
            "firstDueDate" => "2024-10-11"
        ),
        "description" => "Mensal: A cada 1 mês, 99 vezes",
        "recurrenceTerm" => array(
            "termType" => "OCCURRENCE_COUNT",
            "dateToTerm" => "2024-10-09",
            "occurenceCountToTerm" => 99
        ),
        "recurrenceFrequency" => array(
            "frequencyType" => "MONTHLY",
            "frequencyInterval" => 1
        )
    ),
    "paymentConditionsOperation" => "UPDATE"
);

$data_json = json_encode($data);

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_json), 
    'x-authorization:'. '8d31be77-d353-4bad-a1f9-5d42ab2894ca'
));
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_json); 

$response = curl_exec($ch);

curl_close($ch);

echo $response;
?>
