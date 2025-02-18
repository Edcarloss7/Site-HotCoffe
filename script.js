$(document).ready(function() {
    // Função para o menu móvel
    $('.btn-mobile').on('click', function () {
        $('.menu-mobile').toggleClass('active');
        $('.btn-mobile').find('i').toggleClass('fa-x');

        // Ajusta a margem do card de receitas quando o menu estiver ativo
        if ($('.menu-mobile').hasClass('active')) {
            $('.receitas-card-container').css('margin-top', '150px'); // Ajuste conforme necessário
        } else {
            $('.receitas-card-container').css('margin-top', '0');
        }
    });

    // Função para exibir/esconder os ingredientes e modo de preparo ao clicar no card
    $('.receitas-card').on('click', function () {
        // Remove a classe 'active' de todos os cards
        $('.receitas-card').not(this).removeClass('active');
        
        // Adiciona ou remove a classe 'active' no card clicado
        $(this).toggleClass('active');

        // Exibe ou esconde os ingredientes e modo de preparo
        $(this).find('.receita-ingredientes, .receita-preparo').toggleClass('active');
    });

});