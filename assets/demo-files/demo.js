// Verifica se o navegador suporta a propriedade 'boxShadow' no estilo do corpo do documento
if (!('boxShadow' in document.body.style)) {
    document.body.setAttribute('class', 'noBoxShadow');
}

// Adiciona um evento de clique ao corpo do documento para selecionar texto em inputs
document.body.addEventListener("click", function(e) {
    var target = e.target;
    // Verifica se o alvo do evento é um elemento INPUT e não possui a classe 'liga'
    if (target.tagName === "INPUT" &&
        target.getAttribute('class').indexOf('liga') === -1) {
        target.select();
    }
});

// Função imediatamente invocada para configurar o tamanho da fonte e atualizar o texto de teste
(function() {
    // Obtém referências aos elementos HTML relevantes
    var fontSize = document.getElementById('fontSize'),
        testDrive = document.getElementById('testDrive'),
        testText = document.getElementById('testText');
    
    // Função para atualizar o texto de teste com o valor do input
    function updateTest() {
        testDrive.innerHTML = testText.value || String.fromCharCode(160);
        // Verifica se a função icomoonLiga está disponível e a aplica ao texto de teste
        if (window.icomoonLiga) {
            window.icomoonLiga(testDrive);
        }
    }
    
    // Função para atualizar o tamanho da fonte do texto de teste
    function updateSize() {
        testDrive.style.fontSize = fontSize.value + 'px';
    }
    
    // Adiciona listeners de eventos para detectar mudanças no tamanho da fonte e no texto de teste
    fontSize.addEventListener('change', updateSize, false);
    testText.addEventListener('input', updateTest, false);
    testText.addEventListener('change', updateTest, false);
    
    // Inicializa o tamanho da fonte e o texto de teste
    updateSize();
}());
