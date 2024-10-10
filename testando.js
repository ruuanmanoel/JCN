const alo = {
    "competenceDate": "2024-10-10",
    "externalReference": null,
    "negotiatorId": "e6c81711-999f-4d90-b538-3eb2026f7618",
    "reference": {
        "origin": "FINANCIAL_ENTRY"
    },
    "status": "PENDING",
    "value": 525,
    "categoriesRatio": [
        {
            "categoryId": "8bc95e58-f955-439d-b5c8-3d8d03076704",
            "percentage": 100,
            "value": 525,
            "costCentersRatio": [
                {
                    "value": 525,
                    "percentage": 100,
                    "costCenterId": "1e7c8b48-828c-11ef-a892-5f6d72475897",
                    "name": "Pferd",
                    "code": "6230"
                }
            ]
        }
    ],
    "type": "EXPENSE",
    "description": "teste",
    "paymentCondition": {
        "value": 525,
        "daysBetweenInstallments": 30,
        "numberOfInstallments": 3,
        "initialDueDate": "2024-11-10",
        "financialAccountId": "2ee87bdd-f09c-4abe-a49c-764f45ae8a39",
        "paymentMethod": "CREDIT_CARD",
        "installments": [
            {
                "index": 1,
                "valueComposition": {
                    "grossValue": 175,
                    "interest": 0,
                    "fine": 0,
                    "fee": 0,
                    "discount": 0
                },
                "percentage": 33.333333333333336,
                "dueDate": "2024-11-10",
                "acquittances": [],
                "expectedPaymentDate": "2024-11-10",
                "description": "teste 1/3",
                "paymentMethod": "CREDIT_CARD",
                "financialAccount": {
                    "id": "2ee87bdd-f09c-4abe-a49c-764f45ae8a39",
                    "version": 0,
                    "bankInstitution": "ITAU",
                    "bankInstitutionCode": 341,
                    "name": "Itaú",
                    "active": true,
                    "type": "CHECKINGACCOUNT",
                    "legacyId": 40671558,
                    "parentId": null,
                    "closingDate": null,
                    "dueDate": null,
                    "defaultAccount": true,
                    "hasBankSlipConfiguration": false,
                    "contaAzulDigital": false,
                    "cashierAccount": false,
                    "chargeRequestEnabled": false,
                    "externalReference": null,
                    "agency": "1538",
                    "number": "149053",
                    "wizardStatus": null
                },
                "financialAccountId": "2ee87bdd-f09c-4abe-a49c-764f45ae8a39",
                "paid": 0,
                "nsu": null,
                "isCaPaymentType": false
            },
            {
                "index": 2,
                "valueComposition": {
                    "grossValue": 175,
                    "interest": 0,
                    "fine": 0,
                    "fee": 0,
                    "discount": 0
                },
                "percentage": 33.333333333333336,
                "dueDate": "2024-12-05",
                "acquittances": [],
                "expectedPaymentDate": "2024-12-05",
                "description": "teste 2/3",
                "paymentMethod": "CREDIT_CARD",
                "financialAccount": {
                    "id": "2ee87bdd-f09c-4abe-a49c-764f45ae8a39",
                    "version": 0,
                    "bankInstitution": "ITAU",
                    "bankInstitutionCode": 341,
                    "name": "Itaú",
                    "active": true,
                    "type": "CHECKINGACCOUNT",
                    "legacyId": 40671558,
                    "parentId": null,
                    "closingDate": null,
                    "dueDate": null,
                    "defaultAccount": true,
                    "hasBankSlipConfiguration": false,
                    "contaAzulDigital": false,
                    "cashierAccount": false,
                    "chargeRequestEnabled": false,
                    "externalReference": null,
                    "agency": "1538",
                    "number": "149053",
                    "wizardStatus": null
                },
                "financialAccountId": "2ee87bdd-f09c-4abe-a49c-764f45ae8a39",
                "paid": 0,
                "nsu": null,
                "isCaPaymentType": false
            },
            {
                "index": 3,
                "valueComposition": {
                    "grossValue": 175,
                    "interest": 0,
                    "fine": 0,
                    "fee": 0,
                    "discount": 0
                },
                "percentage": 33.333333333333336,
                "dueDate": "2024-12-13",
                "acquittances": [],
                "expectedPaymentDate": "2024-12-13",
                "description": "teste 3/3",
                "paymentMethod": "CREDIT_CARD",
                "financialAccount": {
                    "id": "2ee87bdd-f09c-4abe-a49c-764f45ae8a39",
                    "version": 0,
                    "bankInstitution": "ITAU",
                    "bankInstitutionCode": 341,
                    "name": "Itaú",
                    "active": true,
                    "type": "CHECKINGACCOUNT",
                    "legacyId": 40671558,
                    "parentId": null,
                    "closingDate": null,
                    "dueDate": null,
                    "defaultAccount": true,
                    "hasBankSlipConfiguration": false,
                    "contaAzulDigital": false,
                    "cashierAccount": false,
                    "chargeRequestEnabled": false,
                    "externalReference": null,
                    "agency": "1538",
                    "number": "149053",
                    "wizardStatus": null
                },
                "financialAccountId": "2ee87bdd-f09c-4abe-a49c-764f45ae8a39",
                "paid": 0,
                "nsu": null,
                "isCaPaymentType": false
            }
        ],
        "lumpSum": false,
        "nsu": null,
        "alreadyAcquitted": false
    },
    "observation": null,
    "attachments": [],
    "recurrence": {
        "active": false,
        "recurrenceDue": {
            "dueReferenceDayType": "DAY_OF_MONTH",
            "dueMonthDay": "1",
            "dueWeekDay": "MONDAY",
            "firstDueDate": "2024-10-11"
        },
        "description": "Mensal: A cada 1 mês, 99 vezes",
        "recurrenceTerm": {
            "termType": "OCCURRENCE_COUNT",
            "dateToTerm": "2024-10-09",
            "occurenceCountToTerm": 99
        },
        "recurrenceFrequency": {
            "frequencyType": "MONTHLY",
            "frequencyInterval": 1
        }
    },
    "paymentConditionsOperation": "UPDATE"
}