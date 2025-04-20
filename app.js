const receitas = [
    {
        id: 1,
        titulo: "Maminha Assada",
        autor: "Anne Cristina",
        categoria: "Receitas Salgadas",
        imagem: "https://receitatodahora.com.br/wp-content/uploads/2024/08/almoco-de-domingo-1908.jpg",
        descricao: "Esta é uma ótima opção para um almoço de domingo. Maminha bovina assada."
    },
    {
        id: 2,
        titulo: "Sobremesa gelada de ninho trufado com avelã e morangos",
        autor: "Danielle Cristina",
        categoria: "Sobremesas",
        imagem: "https://www.bonsfluidos.com.br/wp-content/uploads/2021/12/sobremesa-gelada-de-ninho-trufado-com-avela-e-morangos-para-adocar-seu-dia-1106097.jpg",
        descricao: "Uma inspiração de doce de ninho trufado, avelã e morango que vai adoçar seu dia!"
    },
    {
        id: 3,
        titulo: "Macarrão de forno",
        autor: "Kairon Felipe",
        categoria: "Receitas Rápidas",
        imagem: "https://www.receitasonline.com.br/wp-content/uploads/macarrao-de-forno-750x500.jpg",
        descricao: "Quando a gente está sem tempo e tem que preparar um prato rápido, o macarrão de forno é uma ótima escolha."
    },
    {
        id: 4,
        titulo: "Bolo de Cenoura",
        autor: "Maria Aparecida",
        categoria: "Bolos",
        imagem: "https://receitatodahora.com.br/wp-content/uploads/2017/05/bolo-de-cenoura-perfeito.jpg",
        descricao: "Essa receita de bolo de cenoura é perfeita, fácil de fazer e com um sabor delicioso! Abuse na cobertura!"
    }
];

function gerarCards() {
    const container = document.querySelector('#receitas-container');

    receitas.forEach(receita => {
        const card = document.createElement('article');
        card.classList.add('col-md-6', 'mb-4');
        
        card.innerHTML = `
            <div class="card">
                <img src="${receita.imagem}" alt="${receita.titulo}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${receita.titulo}</h3>
                    <h4 class="card-subtitle text-muted">
                        <span>Por ${receita.autor}</span> - 
                        <span>[${receita.categoria}]</span>
                    </h4>
                    <p class="card-text">${receita.descricao}</p>
                    <a href="detalhes.html?id=${receita.id}" class="btn btn-primary">Ver detalhes</a>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function getParametroId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function carregarDetalhes() {
    const id = getParametroId();
    const receita = receitas.find(item => item.id == id);

    if (receita) {
        const container = document.querySelector('#detalhes-container');

        container.innerHTML = `
            <h1>${receita.titulo}</h1>
            <img src="${receita.imagem}" alt="${receita.titulo}" class="img-fluid mb-4">
            <p><strong>Por ${receita.autor}</strong> - <em>[${receita.categoria}]</em></p>
            <p>${receita.descricao}</p>
        `;
    } else {
        document.querySelector('#detalhes-container').innerHTML = `<p>Receita não encontrada!</p>`;
    }
}
function gerarCards() {
    const container = document.querySelector('#receitas-container');
    container.innerHTML = ""; // limpa antes de renderizar

    receitas.forEach(receita => {
        const card = document.createElement('div');
        card.classList.add('col-md-6', 'col-lg-4', 'mb-4');

        card.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
                <div class="card-body" style="background-color: rgb(243, 239, 218);">
                    <h5 class="card-title" style="color: #e74c3c;">${receita.titulo}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Por ${receita.autor} - <em>${receita.categoria}</em></h6>
                    <p class="card-text">${receita.descricao}</p>
                    <a href="detalhes.html?id=${receita.id}" class="btn btn-primary">Ver detalhes</a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

window.onload = function() {
    if (window.location.pathname.includes('detalhes.html')) {
        carregarDetalhes();
    } else {
        gerarCards(); 
    }
};
