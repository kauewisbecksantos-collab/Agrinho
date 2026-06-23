// Aguarda o HTML ser totalmente carregado antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito de Scroll no Cabeçalho (Muda a cor do menu ao rolar a página)
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#0f0f1a"; // Fica um pouco mais escuro
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
        } else {
            header.style.backgroundColor = "#1a1a2e"; // Volta à cor original
            header.style.boxShadow = "none";
        }
    });

    // 2. Ação dos Botões "Tenho Interesse"
    const botoesInteresse = document.querySelectorAll(".btn-contato");

    botoesInteresse.forEach((botao) => {
        botao.addEventListener("click", (event) => {
            // Impede o link '#' de atualizar a página
            event.preventDefault(); 
            
            // Pega o nome do carro que está no mesmo card do botão clicado
            const card = botao.closest(".card-info");
            const nomeCarro = card.querySelector("h3").innerText;
            const precoCarro = card.querySelector(".card-price").innerText;

            // Mensagem de confirmação simulando o envio
            alert(`🎉 Obrigado pelo interesse!\n\nNossa equipe comercial recebeu seu contato para o veículo: "${nomeCarro}" no valor de ${precoCarro}.\n\nEntraremos em contato em até 24 horas!`);
        });
    });

});
