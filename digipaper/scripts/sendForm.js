function call() {
    var msg = $('#cForm').serialize();
    $.ajax({
        type: 'POST',
        url: 'post.php',
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
            $("#email").css({ "background": "#F1F4F7" });
        } else {
            $("#email").css({ "background": "#ffe0e0" });
            return;
        }
    } else {
        $("#email").css({ "background": "#ffe0e0" });
        return;
    }
    if (name != 0) {
        $("#name").css({ "background": "#F1F4F7" });
    } else {
        $("#name").css({ "background": "#ffe0e0" });
        return;
    }
    if (message != 0) {
        $("#message").css({ "background": "#F1F4F7" });
    } else {
        $("#message").css({ "background": "#ffe0e0" });
        return;
    }
    $("#submitButton").addClass("disabled");
    setTimeout(continueExecution, 1000)
    function continueExecution() {
        document.getElementById('cForm').reset();
        $("#submitButton").removeClass("disabled");
    }
    return false;
}