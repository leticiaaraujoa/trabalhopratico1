const receitas = [
    {
        id: 1,
        titulo: "Maminha Assada",
        autor: "Anne Cristina",
        categoria: "Receitas Salgadas",
        imagem: "https://receitatodahora.com.br/wp-content/uploads/2024/08/almoco-de-domingo-1908.jpg",
        imagem2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmofE-jcDmjHAT3hvg3fG7vSujo8W7NExcUw&s",
        descricao: "Esta é uma ótima opção para um almoço de domingo. Maminha bovina assada.",
        tempoPreparo: "1h30min",
        rendimento: "6 porções",
        ingredientes: [
            "1 peça de maminha (cerca de 1,5 kg)",
            "4 dentes de alho amassados",
            "2 colheres (sopa) de mostarda",
            "2 colheres (sopa) de molho inglês",
            "1 colher (sopa) de sal grosso",
            "1 colher (chá) de pimenta-do-reino moída",
            "2 colheres (sopa) de azeite de oliva"
        ],
        passos: [
            "Tempere a maminha com alho, mostarda, molho inglês, sal e pimenta.",
            "Deixe descansar por pelo menos 2 horas na geladeira.",
            "Pré-aqueça o forno a 200°C.",
            "Em uma assadeira, coloque a maminha e regue com azeite.",
            "Asse por aproximadamente 1 hora ou até atingir o ponto desejado.",
            "Retire do forno e deixe descansar por 10 minutos antes de cortar."
        ]
    },
    {
        id: 2,
        titulo: "Sobremesa gelada de ninho trufado com avelã e morangos",
        autor: "Danielle Cristina",
        categoria: "Sobremesas",
        imagem: "https://www.bonsfluidos.com.br/wp-content/uploads/2021/12/sobremesa-gelada-de-ninho-trufado-com-avela-e-morangos-para-adocar-seu-dia-1106097.jpg",
        imagem2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlELLtdu0b6A_OhirUfcmwX81dNPtyHLPeA&s",
        descricao: "Uma inspiração de doce de ninho trufado, avelã e morango que vai adoçar seu dia!",
        tempoPreparo: "40min",
        rendimento: "8 porções",
        ingredientes: [
            "1 lata de leite condensado",
            "1 caixa de creme de leite",
            "5 colheres (sopa) de leite em pó",
            "1 xícara de morangos picados",
            "1/2 xícara de creme de avelã",
            "1 pacote de biscoito tipo champanhe"
        ],
        passos: [
            "Em um liquidificador, bata o leite condensado, creme de leite e leite em pó até obter um creme homogêneo.",
            "Em taças individuais, faça camadas alternadas de biscoito triturado, creme de ninho e morangos.",
            "Finalize com uma camada de creme de avelã.",
            "Leve à geladeira por pelo menos 4 horas antes de servir."
        ]
    },
    {
        id: 3,
        titulo: "Macarrão de forno",
        autor: "Kairon Felipe",
        categoria: "Receitas Rápidas",
        imagem: "https://www.receitasonline.com.br/wp-content/uploads/macarrao-de-forno-750x500.jpg",
        imagem2: "https://areademulher.r7.com/wp-content/uploads/2022/06/macarrao-de-forno-cremoso.jpg",
        descricao: "Quando a gente está sem tempo e tem que preparar um prato rápido, o macarrão de forno é uma ótima escolha.",
        tempoPreparo: "1h15min",
        rendimento: "6 porções",
        ingredientes: [
            "500g de macarrão penne",
            "500g de carne moída",
            "1 cebola picada",
            "2 dentes de alho picados",
            "1 lata de molho de tomate",
            "200g de queijo mussarela ralado",
            "Sal e pimenta a gosto"
        ],
        passos: [
            "Cozinhe o macarrão conforme as instruções da embalagem.",
            "Em uma panela, refogue a cebola e o alho, depois acrescente a carne moída e tempere com sal e pimenta.",
            "Adicione o molho de tomate e deixe cozinhar por 10 minutos.",
            "Em um refratário, alterne camadas de macarrão, molho e queijo.",
            "Finalize com queijo e leve ao forno pré-aquecido a 180°C por 20 minutos ou até gratinar."
        ]
    },
    {
        id: 4,
        titulo: "Bolo de Cenoura",
        autor: "Maria Aparecida",
        categoria: "Bolos",
        imagem: "https://receitatodahora.com.br/wp-content/uploads/2017/05/bolo-de-cenoura-perfeito.jpg",
        imagem2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsmtK0wDiQEvMLbIAi3lNEYspTtop1xKLfQ&s",
        descricao: "Essa receita de bolo de cenoura é perfeita, fácil de fazer e com um sabor delicioso! Abuse na cobertura!",
        tempoPreparo: "1h",
        rendimento: "12 porções",
        ingredientes: [
            "3 cenouras médias",
            "4 ovos",
            "1 xícara de óleo",
            "2 xícaras de açúcar",
            "2 xícaras de farinha de trigo",
            "1 colher (sopa) de fermento em pó",
            "1 lata de leite condensado",
            "1 colher (sopa) de manteiga",
            "3 colheres (sopa) de chocolate em pó"
        ],
        passos: [
            "Bata no liquidificador as cenouras, ovos e óleo.",
            "Em uma tigela, misture o açúcar e a farinha de trigo, depois acrescente a mistura do liquidificador.",
            "Adicione o fermento e misture delicadamente.",
            "Despeje em uma forma untada e leve ao forno pré-aquecido a 180°C por 40 minutos.",
            "Para a cobertura, misture o leite condensado, manteiga e chocolate em pó em uma panela e leve ao fogo baixo até engrossar.",
            "Despeje sobre o bolo ainda quente."
        ]
    },
    {
        id: 5,
        titulo: "Empadão de Frango",
        autor: "Leticia Araujo",
        categoria: "Receitas Salgadas",
        imagem: "torta.jpeg",
        imagem2: "https://static.itdg.com.br/images/640-400/8542e00db2cd0f6761670765607e6255/shutterstock-2048280131-1-.jpg",
        descricao: "Inconfundível em cada mordida. Esta receita, repleta de cremosidade e sabores marcantes, é uma opção perfeita para qualquer ocasião.",
        tempoPreparo: "1h30min",
        rendimento: "8 porções",
        ingredientes: [
            "MASSA:",
            "500 g de farinha de trigo",
            "4 colheres (sopa) de margarina",
            "100 ml de leite",
            "1/2 colher (sopa) sal",
            "2 ovos",
            "RECHEIO:",
            "400 g de frango desfiado",
            "1 colher (sopa) margarina",
            "½ cebola",
            "1 dente de alho",
            "1 cubo de caldo de galinha",
            "130 g de extrato de tomate",
            "½ xícara de salsinha",
            "½ xícara de cebolinha",
            "250 ml de água",
            "120 g de farinha de trigo",
            "4 colheres (sopa) de requeijão"
        ],
        passos: [
            "PREPARE A MASSA:",
            "Em um bowl, bata todos os ingredientes até obter uma massa homogênea.",
            "Reserve na geladeira por 60 minutos.",
            "Abra metade da massa com um rolo.",
            "Molde a massa em uma forma de torta.",
            "PREPARE O RECHEIO:",
            "Em uma panela, refogue a cebola e o alho na margarina.",
            "Acrescente o frango desfiado e o extrato de tomate.",
            "Coloque metade da água e deixe levantar fervura.",
            "Em um liquidificador, bata o restante da água com a farinha de trigo até obter um creme.",
            "Adicione o creme na panela do frango.",
            "Adicione salsinha, cebolinha e requeijão.",
            "Mexa até engrossar.",
            "MONTAGEM:",
            "Recheie a massa com o auxílio de uma colher.",
            "Com um rolo, abra o restante da massa e corte em tiras.",
            "Cubra a torta com a massa.",
            "Leve a torta ao forno preaquecido a 280 °C por 20 minutos."
        ]
    },
    {
        id: 6,
        titulo: "Palha Italiana",
        autor: "Anna Júlia",
        categoria: "Sobremesas",
        imagem: "palha.jpg",
        imagem2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsty1sf7q47FC85wFtTuYVsZTzqLOaH1AmA&s",
        descricao: "Um doce feito à base de brigadeiro e biscoito triturado, de sabor maravilhoso!",
        tempoPreparo: "40min",
        rendimento: "20 porções",
        ingredientes: [
            "1 lata de leite condensado",
            "4 colheres (sopa) de chocolate em pó",
            "1 colher (sopa) de manteiga",
            "1 pacote de biscoito maisena",
            "Chocolate granulado para decorar"
        ],
        passos: [
            "Em uma panela, misture o leite condensado, chocolate em pó e manteiga.",
            "Leve ao fogo baixo, mexendo sempre até desprender do fundo da panela (ponto de brigadeiro).",
            "Triture os biscoitos no processador ou em um saco plástico com auxílio de um rolo.",
            "Misture o brigadeiro com os biscoitos triturados.",
            "Modele palitinhas ou bolinhas com as mãos untadas.",
            "Passe no chocolate granulado e leve à geladeira por 30 minutos antes de servir."
        ]
    },
    {
        id: 7,
        titulo: "Lasanha",
        autor: "José Roberto",
        categoria: "Massas",
        imagem: "lasanha.jpg",
        imagem2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyacXq_NO5rHm0Yi-Ipr1mOhYxCMXcPuvDsQ&s",
        descricao: "Prático, rápido e muito saboroso. Com suas camadas de massa, recheio e molho, é uma verdadeira explosão de sabores.",
        tempoPreparo: "1h15min",
        rendimento: "6 porções",
        ingredientes: [
            "500g de massa para lasanha",
            "500g de carne moída",
            "2 caixas de creme de leite",
            "3 colheres de manteiga",
            "3 colheres de farinha de trigo",
            "500ml de leite",
            "1 cebola picada",
            "3 dentes de alho picados",
            "1 caixa de molho de tomate",
            "200g de queijo mussarela ralado",
            "Sal e pimenta a gosto"
        ],
        passos: [
            "Cozinhe a massa conforme as instruções da embalagem.",
            "Em uma panela, refogue a cebola e o alho na manteiga.",
            "Acrescente a carne moída e tempere com sal e pimenta.",
            "Adicione o molho de tomate e deixe cozinhar por 10 minutos.",
            "Prepare o molho branco: derreta a manteiga, misture a farinha e acrescente o leite aos poucos, mexendo até engrossar.",
            "Em um refratário, alterne camadas de massa, molho vermelho, molho branco e queijo.",
            "Finalize com queijo e leve ao forno pré-aquecido a 180°C por 20 minutos ou até gratinar."
        ]
    }
];

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

function carregarDetalhes() {
    const id = new URLSearchParams(window.location.search).get('id');
    const receita = receitas.find(item => item.id == id);

    if (receita) {
        const container = document.querySelector('#detalhes-container');

        // Seção de informações básicas
        let infoHTML = `
            <div class="row mb-4">
                <div class="col-md-6">
                    <h1 class="mb-3" style="color: #e74c3c;">${receita.titulo}</h1>
                    <p class="lead"><strong>Por ${receita.autor}</strong> - <em>${receita.categoria}</em></p>
                    <div class="d-flex gap-4 mb-3">
                        <span><i class="bi bi-clock"></i> ${receita.tempoPreparo}</span>
                        <span><i class="bi bi-people"></i> ${receita.rendimento}</span>
                    </div>
                    <p class="mb-4">${receita.descricao}</p>
                </div>
                <div class="col-md-6">
                    <img src="${receita.imagem}" alt="${receita.titulo}" class="img-fluid rounded shadow-lg">
                </div>
            </div>
        `;

        // Seção de ingredientes
        let ingredientesHTML = `
            <div class="row">
                <div class="col-lg-6">
                    <div class="card mb-4">
                        <div class="card-header bg-burlywood text-white">
                            <h3 class="mb-0"><i class="bi bi-list-check"></i> Ingredientes</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                ${receita.ingredientes.map(ingrediente => `
                                    <li class="list-group-item d-flex align-items-center">
                                        <i class="bi bi-check-circle-fill text-success me-2"></i>
                                        ${ingrediente}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
        `;

        // Seção de modo de preparo
        let passosHTML = `
                <div class="col-lg-6">
                    <div class="card mb-4">
                        <div class="card-header bg-burlywood text-white">
                            <h3 class="mb-0"><i class="bi bi-list-ol"></i> Modo de Preparo</h3>
                        </div>
                        <div class="card-body">
                            <ol class="list-group list-group-numbered">
                                ${receita.passos.map(passo => `
                                    <li class="list-group-item">${passo}</li>
                                `).join('')}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Seção de segunda imagem
        let segundaImagemHTML = `
            <div class="row mt-4">
                <div class="col-12 text-center">
                    <img src="${receita.imagem2}" alt="${receita.titulo}" class="img-fluid rounded shadow-lg" style="max-height: 500px;">
                </div>
            </div>
        `;

        container.innerHTML = infoHTML + ingredientesHTML + passosHTML + segundaImagemHTML + `
            <div class="text-center mt-5">
                <a href="index.html" class="btn btn-primary btn-lg">
                    <i class="bi bi-arrow-left"></i> Voltar para todas as receitas
                </a>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Receita não encontrada!
            </div>
            <a href="index.html" class="btn btn-primary mt-3">Voltar para todas as receitas</a>
        `;
    }
}

window.onload = function() {
    if (window.location.pathname.includes('detalhes.html')) {
        carregarDetalhes();
    } else {
        gerarCards(); 
    }
};