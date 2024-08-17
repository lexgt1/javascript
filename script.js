
let count = 0;

function logMessage() {
   
    const messageContainer = document.getElementById('message-container');
    
    
    for (let i = count; i < 3; i++) {
        console.log("Conexão feita com sucesso!");

        
        const messageElement = document.createElement('p');
        messageElement.textContent = "Conexão feita com sucesso!";
        messageContainer.appendChild(messageElement);
    }
}

// Chama a função para executar o loop
logMessage();
