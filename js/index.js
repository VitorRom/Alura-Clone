
document.addEventListener('DOMContentLoaded', () => {
    // Declara as variaveis iniciais
    const $ = document.querySelector.bind(document);
    const btnPesquisa = $('#imagem-busca');
    const faixaHeader = $('.faixa-header');
    const body = document.body;
    const btnFecharFaixaHeader = $('.botao-cancelar-pesquisa');

    let isFaixaActive = false;

    //Empurra o body para cima inicialmente para esconder a barra de pesquisa
    body.style.transform = 'translateY(-62px)';

    //Adiciona um escutador no botão de fechar a barra de pesquisa
    btnFecharFaixaHeader.addEventListener('click', () => {
        faixaHeader.style.top = '-62px';
        body.style.transform = 'translateY(-62px)';
        isFaixaActive = false;

    });

    //Adiciona um escutador no botão de pesquisar e esconde as listas que estão ativas
    btnPesquisa.addEventListener('click', () => {
        if (isFaixaActive) {
            faixaHeader.style.top = '-62px';
            body.style.transform = 'translateY(-62px)';
            isFaixaActive = false;
            hideLists();
        } else {
            faixaHeader.style.top = '0px';
            body.style.transform = 'translateY(0px)';
            isFaixaActive = true;
            hideLists();
        }
    });

    //Declara as váriaveis para as listas
    const btnListaEstudar = $('#nome-item-nav-estudar');
    const btnListaAprofundar = $('#nome-item-nav-aprofundar');
    const btnListaPraticar = $('#nome-item-nav-praticar');
    const btnListaComunidade = $('#nome-item-nav-comunidade');
    const btnListaUser = $('#btn-nome')
    const listaNavEstudar = $('#lista-nav-estudar');
    const listaNavAprofundar = $('#lista-nav-aprofundar');
    const listaNavPraticar = $('#lista-nav-praticar');
    const listaNavComunidade = $('#lista-nav-comunidade');
    const listaNavUser = $('#lista-nav-user');
    const linhaNavEstudar = $('#linha-nav-estudar');
    const linhaNavAprofundar = $('#linha-nav-aprofundar');
    const linhaNavPraticar = $('#linha-nav-praticar');
    const linhaNavComunidade = $('#linha-nav-comunidade');
    const linhaNavUser = $('#linha-nav-user');
    const setaEstudos = $('#seta-estudar');
    const setaAprofundar = $('#seta-aprofundar');
    const setaPraticar = $('#seta-praticar');
    const setaComunidade = $('#seta-comunidade');
    const setaUser = $('#seta-user');
    const setas = $('.seta-baixo');

    //Aplica a cor azul para a seta quando a lista está ativa
    const aplicarFiltroSeta = (seta) => {
        seta.style.filter = 'invert(54%) sepia(95%) saturate(931%) hue-rotate(171deg) brightness(94%) contrast(91%)';
    };
    //Limpa a cor azul das setas desativadas
    const limparFiltroSeta = (seta1, seta2, seta3, seta4, seta5) => {
        seta1.style.filter = 'none';
        seta2.style.filter = 'none';
        seta3.style.filter = 'none';
        seta4.style.filter = 'none';
        seta5.style.filter = 'none';
    };

    // Função para ocultar todas as listas
    const hideLists = () => {
        listaNavEstudar.classList.add('hide');
        listaNavAprofundar.classList.add('hide');
        listaNavPraticar.classList.add('hide');
        listaNavComunidade.classList.add('hide');
        listaNavUser.classList.add('hide');
        linhaNavEstudar.style.width = '0px'
        linhaNavAprofundar.style.width = '0px'
        linhaNavPraticar.style.width = '0px'
        linhaNavComunidade.style.width = '0px'
        linhaNavUser.style.width = '0px'
        limparFiltroSeta(setaEstudos, setaPraticar, setaUser, setaAprofundar, setaComunidade)
    };

    // Inicialmente, oculta todas as listas
    hideLists();

    // Adiciona um ouvinte de eventos de clique nos botões de lista
    btnListaEstudar.addEventListener('click', () => {

        if (listaNavEstudar.classList.contains('hide')) {

            hideLists(); // Oculta todas as listas
            listaNavEstudar.classList.remove('hide'); // Exibe a lista correspondente
            linhaNavEstudar.style.width = '40px'
            aplicarFiltroSeta(setaEstudos)

        } else {
            // Se a lista estiver visível, oculta-a
            listaNavEstudar.classList.add('hide');
            linhaNavEstudar.style.width = '0px'
            limparFiltroSeta(setas)
        }
    });

    btnListaAprofundar.addEventListener('click', () => {
        if (listaNavAprofundar.classList.contains('hide')) {
            hideLists();
            listaNavAprofundar.classList.remove('hide');
            linhaNavAprofundar.style.width = '40px'
            aplicarFiltroSeta(setaAprofundar)
        } else {
            listaNavAprofundar.classList.add('hide');
            linhaNavAprofundar.style.width = '0px'
            limparFiltroSeta(setaAprofundar)
        }
    });

    btnListaPraticar.addEventListener('click', () => {
        if (listaNavPraticar.classList.contains('hide')) {
            hideLists();
            listaNavPraticar.classList.remove('hide');
            linhaNavPraticar.style.width = '40px'
            aplicarFiltroSeta(setaPraticar)

        } else {
            listaNavPraticar.classList.add('hide');
            linhaNavPraticar.style.width = '0px'
            setaPraticar.style.filter = 'none'
            limparFiltroSeta(setaPraticar)
        }
    });

    btnListaComunidade.addEventListener('click', () => {
        if (listaNavComunidade.classList.contains('hide')) {

            hideLists();
            listaNavComunidade.classList.remove('hide');
            linhaNavComunidade.style.width = '40px'
            aplicarFiltroSeta(setaComunidade)

        } else {
            listaNavComunidade.classList.add('hide');
            linhaNavComunidade.style.width = '0px'
            setaComunidade.style.filter = 'none'
            limparFiltroSeta(setaComunidade)
        }
    });

    btnListaUser.addEventListener('click', () => {
        if (listaNavUser.classList.contains('hide')) {

            hideLists();
            listaNavUser.classList.remove('hide');
            linhaNavUser.style.width = '40px'
            aplicarFiltroSeta(setaUser)

        } else {
            listaNavUser.classList.add('hide');
            linhaNavUser.style.width = '0px'
            setaUser.style.filter = 'none'
            limparFiltroSeta(setaUser)
        }
    });

    // Adiciona um ouvinte de eventos de clique no documento para ocultar as listas quando o usuário clicar em qualquer outra parte da página
    document.addEventListener('click', (event) => {
        // Verifica se o clique não foi em nenhum dos elementos .lista-nav-bar, .nome-item-de-navegacao ou #imagem-busca
        if (!event.target.closest('.lista-nav-bar') && !event.target.closest('.nome-item-de-navegacao') && event.target.id !== 'imagem-busca') {
            hideLists();
        }
    });

    //Declara a variavel de todos os sliders
    const sliders = document.querySelectorAll('.container-conteudo-formacoes');

    // For each usado para executar a função de slider em cada um dos sliders
    sliders.forEach((slider) => {
        //Declara a variavel das ancoras que são usadas como botão dos slides
        const ancoras = slider.querySelectorAll('.carrossel-link-de-controle');

        //Para cada ancora que é clicada executa uma função anonima que recebe como valor um event
        ancoras.forEach((ancora, index) => {
            //Adiciona um escutador nas ancoras que executa outra função anonima
            ancora.addEventListener('click', (event) => {
                event.preventDefault();

                //Declaras a variaveis utilizadas para o evento de slide, utilizando a função .closest para armazenar uma referência ao ancestral mais próximo do elemento ancora
                const containerFormacaoDescricao = ancora.closest('.container-formacao-descricao');
                const divsConteudo = containerFormacaoDescricao.querySelectorAll('.conteudo-container-formacoes-descricao');

                //Cria um for each para remover a classe active dos botões, colorindo assim o bg da ancora ativa
                ancoras.forEach((a) => {
                    a.classList.remove('active');
                });
                //Cria um for each para adicionar a classe active nos botões, colorindo assim o bg da ancora ativa
                ancora.classList.add('active');

                // Um loop que itera sobre todas as divs de conteúdo no array 'divsConteudo'.
                for (let i = 0; i < divsConteudo.length; i++) {

                    // Se o índice atual 'i' for menor que o índice alvo 'index'.
                    if (i < index) {
                        // Move a div para a esquerda, deslocando seu conteúdo para fora da tela.
                        divsConteudo[i].style.transform = 'translateX(-100%)';
                        // Se o índice atual 'i' for igual ao índice alvo 'index'.
                    } else if (i === index) {
                        // Coloca a div de volta à posição original (sem deslocamento horizontal) e define a escala para 1, sem alterações.
                        divsConteudo[i].style.transform = 'translateX(0) scale(1)';
                        // Se o índice atual 'i' for igual ao índice alvo 'index' mais um.
                    } else if (i === index + 1) {
                        // Move a div ligeiramente para a direita (27px) e diminui sua escala para 0.95, dando uma aparência de encolhimento.
                        divsConteudo[i].style.transform = 'translateX(27px) scale(0.95)';
                        // Para qualquer outro índice que não se encaixe nas condições anteriores.
                    } else {
                        // Remove qualquer transformação aplicada anteriormente, restaurando o estilo original.
                        divsConteudo[i].style.transform = '';
                    }
                }
            });
        });

        const buttons = document.querySelectorAll('.btn-carreiras');
        const containers = document.querySelectorAll('.container-titulo-carreiras');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const targetContainerId = button.getAttribute('data-container');
                containers.forEach(container => {
                    if (container.id === targetContainerId) {
                        container.style.display = 'flex';
                    } else {
                        container.style.display = 'none';
                    }
                });

                buttons.forEach(btn => {
                    if (btn === button) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            });
        });
    });
});

