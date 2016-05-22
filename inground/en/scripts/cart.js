var position = false;
$.fn.animateRotate = function (angle, duration, easing, complete) {
    return this.each(function () {
        var $elem = $(this);

        $({ deg: 0 }).animate({ deg: angle }, {
            duration: duration,
            easing: easing,
            step: function (now) {
                $elem.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            },
            complete: complete || $.noop
        });
    });
};
$.fn.animateRotate2 = function (angle, duration, easing, complete) {
    return this.each(function () {
        var $elem = $(this);

        $({ deg: 180 }).animate({ deg: angle }, {
            duration: duration,
            easing: easing,
            step: function (now) {
                $elem.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            },
            complete: complete || $.noop
        });
    });
};

function sideMenu() {    
    if (!position) {
        $("#bgMask").css({ "display": "block" });
        setTimeout(continueExecution4, 70)
        function continueExecution4() {
            $("#closeBtn").css({ "display": "inline-block" });
        }
        setTimeout(continueExecution2, 300)
        function continueExecution2() {
            $(".menuTitle").css({ "display": "inline-block" });
            $(".empty-cart-message").css({ "display": "block" });
			$(".menuFooter").css({ "display": "block" });
            $(".amount").css({ "display": "block" });
			$(".button-to-cart").css({ "display": "inline-block" });
        }
        $("#bgMask").animate({ "opacity": "0.7" }, 150);
        $('#closeBtn').animateRotate(180);
        $("#sideMenu").animate({ "width": "350px" }, 300);
        position = true;
    }
    else {
		$(".button-to-cart").css({ "display": "none" });
        $(".amount").css({ "display": "none" });
        $(".empty-cart-message").css({ "display": "none" });
        $(".menuTitle").css({ "display": "none" });
		$(".menuFooter").css({ "display": "none" });
        $("#bgMask").animate({ "opacity": "0" }, 300);        
        $("#sideMenu").animate({ "width": "0px" }, 300);
        setTimeout(continueExecution3, 150)
        function continueExecution3() {
            $("#bgMask").css({ "display": "none" });
        }
        $('#closeBtn').animateRotate2(0);
        setTimeout(continueExecution5, 200)
        function continueExecution5() {
            $("#closeBtn").css({ "display": "none" });
        }
        position = false;
    }
}