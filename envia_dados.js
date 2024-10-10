const data = {
    nome: "Ruan",
    email: "ruan@exemplo.com",
    idade: 25
};

const options = {
    method: "POST", // Define o método HTTP como POST
    headers: {
        'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
    },
    body: JSON.stringify(data) // Converte o objeto JavaScript para JSON
};

fetch('http://localhost/JCN/pega_dados.php', options)
    .then(response => response.json()) // Supondo que o PHP retorne JSON
    .then(data => {
        console.log('Success:', data); // Exibe a resposta do servidor no console
    })
    .catch(error => {
        console.error('Error:', error); // Exibe erros no console
    });
