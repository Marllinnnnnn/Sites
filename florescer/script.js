const btnVerMais = document.getElementById('btn-ver-mais');
const produtosOcultos = document.querySelectorAll('.produto-oculto');

btnVerMais.addEventListener('click', function() {
    // Verifica se os produtos já estão aparecendo
    const estaAberto = btnVerMais.innerText === "Ver Menos";

    if (!estaAberto) {
        // MOSTRAR PRODUTOS
        produtosOcultos.forEach(produto => {
            produto.classList.add('ativo');
        });
        btnVerMais.innerText = "Ver Menos";
    } else {
        // ESCONDER PRODUTOS
        produtosOcultos.forEach(produto => {
            produto.classList.remove('ativo');
        });
        btnVerMais.innerText = "Ver Mais Produtos";
        
        // OPCIONAL: Rola a página de volta para o início da seção de produtos
        // Isso evita que o usuário fique "perdido" lá embaixo quando os itens sumirem
        document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
    }
});