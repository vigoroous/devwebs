$(document).ready(function () {
    var clicked = true;
    $(".indicator-item#1").click(function () {
        if (clicked) {
            $(".indicator-item#1").animate({ background: "#FF694B" }, 300)
            $(".indicator-item#2").toggleClass("active", false)
            $(".indicator-item#3").toggleClass("active", false)
            $(".indicator-item#4").toggleClass("active", false)
            $(".indicator-item#1").toggleClass("active", true)
            $(".img").animate({ opacity: "0" }, 300)
            $(".greatExpectations").animate({ opacity: "0" }, 300)
            $(".we").animate({ opacity: "0" }, 300)
            clicked = false;
            function func() {
                $(".greatExpectations").css({ display: "none" })
                $(".we").css({ display: "none" })
                $("h1.divineComedy").css({ display: "block" })
                $("p.divineComedy").css({ display: "inline" })
                $(".img").css({ background: "url('images/divineComedy.png') no-repeat center" })
                $(".img").css({ "background-size": "cover" })
                $("h1.divineComedy").animate({ opacity: "1" }, 300)
                $("p.divineComedy").animate({ opacity: "1" }, 300)
                clicked = true;
            }
            setTimeout(func, 300)
            $(".img").animate({ opacity: "1" }, 300)
        }
        return false;
    });
    $(".indicator-item#2").click(function () {
        if (clicked) {
            $(".indicator-item#2").animate({ background: "#FF694B" }, 300)
            $(".indicator-item#1").toggleClass("active", false)
            $(".indicator-item#3").toggleClass("active", false)
            $(".indicator-item#4").toggleClass("active", false)
            $(".indicator-item#2").toggleClass("active", true)
            $(".img").animate({ opacity: "0" }, 300)
            $(".divineComedy").animate({ opacity: "0" }, 300)
            $(".we").animate({ opacity: "0" }, 300)
            clicked = false;
            function func() {
                $(".divineComedy").css({ display: "none" })
                $(".we").css({ display: "none" })
                $("h1.greatExpectations").css({ display: "block" })
                $("p.greatExpectations").css({ display: "inline" })
                $(".img").css({ background: "url('images/greatExpectations.png') no-repeat center" })
                $(".img").css({ "background-size": "cover" })
                $("h1.greatExpectations").animate({ opacity: "1" }, 300)
                $("p.greatExpectations").animate({ opacity: "1" }, 300)                
                clicked = true;
            }
            setTimeout(func, 300)
            $(".img").animate({ opacity: "1" }, 300)
        }
        return false;
    });
    $(".indicator-item#3").click(function () {
        if (clicked) {
            $(".indicator-item#3").animate({ background: "#FF694B" }, 300)
            $(".indicator-item#1").toggleClass("active", false)
            $(".indicator-item#2").toggleClass("active", false)
            $(".indicator-item#4").toggleClass("active", false)
            $(".indicator-item#3").toggleClass("active", true)
            $(".img").animate({ opacity: "0" }, 300)
            $(".greatExpectations").animate({ opacity: "0" }, 300)
            $(".we").animate({ opacity: "0" }, 300)
            clicked = false;
            function func() {
                $(".greatExpectations").css({ display: "none" })
                $(".divineComedy").css({ display: "none" })
                $("h1.we").css({ display: "block" })
                $("p.we").css({ display: "inline" })
                $(".img").css({ background: "url('images/we.png') no-repeat center" })
                $(".img").css({ "background-size": "cover" })
                $("h1.we").animate({ opacity: "1" }, 300)
                $("p.we").animate({ opacity: "1" }, 300)
                clicked = true;
            }
            setTimeout(func, 300)
            $(".img").animate({ opacity: "1" }, 300)
        }
        return false;
    });
    $(".indicator-item#4").click(function () {
        if (clicked) {
            $(".indicator-item#4").animate({ background: "#FF694B" }, 300)
            $(".indicator-item#1").toggleClass("active", false)
            $(".indicator-item#2").toggleClass("active", false)
            $(".indicator-item#3").toggleClass("active", false)
            $(".indicator-item#4").toggleClass("active", true)
            $(".img").animate({ opacity: "0" }, 300)
            $(".greatExpectations").animate({ opacity: "0" }, 300)
            $(".we").animate({ opacity: "0" }, 300)
            clicked = false;
            function func() {
                $(".greatexpectations").css({ display: "none" })
                $(".we").css({ display: "none" })
                $("h1.divineComedy").css({ display: "block" })
                $("p.divineComedy").css({ display: "inline" })
                $(".img").css({ background: "url('images/divineComedy.png') no-repeat center" })
                $(".img").css({ "background-size": "cover" })
                $("h1.divineComedy").animate({ opacity: "1" }, 300)
                $("p.divineComedy").animate({ opacity: "1" }, 300)
                clicked = true;
            }
            setTimeout(func, 300)
            $(".img").animate({ opacity: "1" }, 300)
        }
        return false;
    });
});