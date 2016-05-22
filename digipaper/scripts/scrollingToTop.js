$(document).ready(function () {
    var clicked = true;
    $('#up').click(function () {        
        $('body,html').animate({ scrollTop: 0 }, 500);
        $('#up').animate({ opacity: 0 }, 200);
        $('#up').css({ display: "none" });
        return false;
    })
    var h_hght = $('header').height(); // высота шапки
    var h_mrg = 1;     // отступ когда шапка уже не видна
    $(function () {
        $(window).scroll(function () {
            var top = $(this).scrollTop();
            if (top + h_mrg < h_hght) {
                clicked = true;
                $('#up').css({ display: "none" });
            } else {
                if (clicked) {
                    $('#up').css({ display: "block" });
                    $('#up').animate({ opacity: 1 }, 200)
                    clicked = false;
                }
            }
        });
    });
});