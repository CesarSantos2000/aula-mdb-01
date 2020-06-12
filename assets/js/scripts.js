

function somar(number1, number2) {
    var resultado;
    resultado = number1 + number2;

    return resultado;
}

function subtrair(number1, number2) {
    var resultado;
    resultado = number1 - number2;

    return resultado;
}

function somarForm() {
    var n1 = parseInt($("#number1").val());
    var n2 = parseInt($("#number2").val());

    alert(somar(n1, n2));
}

function subtrairForm() {
    var n1 = parseInt($("#number1").val());
    var n2 = parseInt($("#number2").val());

    alert(subtrair(n1, n2));
}

//    0       1         2       3
//[rafael][guimarães][costa][santos]

$("#form-getName").submit((data) => {

    var fullName = data.target[0].value + " " + data.target[1].value;

    $("#user-name").html(fullName);
    $("#form-getName").addClass("d-none");
    $("#edit-nameButton").removeClass("d-none");

    return false;
});

$("#edit-nameButton").click((data) => {
    enableEditName();
});

function enableEditName() {
    // $("#user-name").html();
    $("#form-getName").removeClass("d-none");
    $("#edit-nameButton").addClass("d-none");
}