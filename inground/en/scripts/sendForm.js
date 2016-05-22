function call() {
    var msg = $('#cForm').serialize();
    $.ajax({
        type: 'POST',
        url: '../contact/post.php',
        data: msg,
        success: function (data) {
            $('.results').html(data);
        },
        error: function (xhr, str) {
            alert('Возникла ошибка: ' + xhr.responseCode);
        }
    });
}
function validation() {
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    if (email != 0) {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (pattern.test(email)) {
            $("#error").css({ "display": "none" });
            $("#email").css({ 'border': '1px solid #445F64' });
        } else {
            $("#email").css({ 'border': '1px solid #8B0000' });
            $("#success").css({ "display": "none" });
            document.getElementById("error").innerHTML = "Пожалуйста, введите действительный email";
            $("#error").css({ "display": "inline-block" });
            return;
        }
    } else {
        $("#email").css({ 'border': '1px solid #8B0000' });
        $("#success").css({ "display": "none" });
        document.getElementById("error").innerHTML = "Заполните поле &quot;Email&quot;";
        $("#error").css({ "display": "inline-block" });
        return;
    }
    if (name != 0) {
        $("#error").css({ "display": "none" });
        $("#name").css({ 'border': '1px solid #445F64' });
    } else {
        $("#name").css({ 'border': '1px solid #8B0000' });
        $("#success").css({ "display": "none" });
        document.getElementById("error").innerHTML = "Заполните поле &quot;Имя&quot;";
        $("#error").css({ "display": "inline-block" });
        return;
    }
    if (message != 0) {
        $("#error").css({ "display": "none" });
        $("#message").css({ 'border': '1px solid #445F64' });

    } else {
        $("#message").css({ 'border': '1px solid #8B0000' });
        $("#success").css({ "display": "none" });
        document.getElementById("error").innerHTML = "Заполните поле &quot;Сообщение&quot;";
        $("#error").css({ "display": "inline-block" });
        return;
    }
    document.getElementById("submit").disabled = true;
    setTimeout(continueExecution, 1000)
    function continueExecution() {
        document.getElementById('cForm').reset();
        document.getElementById("submit").disabled = false;
        $("#success").css({ "display": "inline-block" });
    }
    return false;
}