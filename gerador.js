const fs = require('fs');

console.log("Iniciando a leitura dos dados... 🔍");

try {
    // 1. Lê o arquivo JSON
    const dadosBrutos = fs.readFileSync('dados.json', 'utf8');
    const tecnologias = JSON.parse(dadosBrutos); // Transforma o texto em um array do JS

    // 2. Monta o miolo do HTML (os cards)
    let cardsHtml = '';
    tecnologias.forEach(tech => {
        cardsHtml += `
            <div class="card">
                <h2>${tech.icone} ${tech.nome}</h2>
                <p>Status: <strong>${tech.status}</strong></p>
            </div>
        `;
    });

    // 3. Monta a página HTML completa com um pouco de CSS
    const paginaCompleta = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Relatório de Habilidades</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; }
            h1 { color: #333; text-align: center; }
            .container { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
            .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); width: 250px; text-align: center; }
            .card h2 { font-size: 1.2rem; color: #007bff; }
        </style>
    </head>
    <body>
        <h1>📊 Meu Relatório de Habilidades Automático</h1>
        <div class="container">
            ${cardsHtml}
        </div>
    </body>
    </html>
    `;

    // 4. Cria o arquivo HTML final
    fs.writeFileSync('relatorio.html', paginaCompleta, 'utf8');
    
    console.log("✅ SUCESSO! O arquivo 'relatorio.html' foi gerado com seus dados.");

} catch (erro) {
    console.error("❌ Ops, algo deu errado:", erro);
}