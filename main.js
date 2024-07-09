$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    });


    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        console.log(enderecoNovaImagem)
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src= "${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver a imagem em tamnho real">
            Ver a imagem em tamnho real
            </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);
            $('#endereco-imagem-nova').val('')

    })
})
