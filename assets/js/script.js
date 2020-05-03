var x;
var y = 10;


function pessoaMaisLinda() {


    $('#pessoa-bonita').html('<h1>Rafael é a pessoa mais linda dessa live.</h1>');


}

function onSubmitForm() {
    var nome = $("#nameForm").val();
    var email = $("#emailForm").val();
    var whats = $("#whatsForm").val();


    var htmlText = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Olá, ${nome}!</strong> Pegamos seus dados... Seguem abaixo:
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div>
        <p><strong>Seu e-mail: </strong>${email}</p>
        <p><strong>Seu Número de Whatsapp: </strong>${whats}</p>
    </div>
    `;

    $('#mensagem-form').html(htmlText);

    return false;
}


$("#formulario-contato").submit(function () {
    return onSubmitForm();
});