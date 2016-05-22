$(document).ready(function () {
    $(".button").css({ display: "none" })    
    var clicked = true;
    $(".menuIcon").click(function () {
        var height = $("#menuParent").css("height");
        $('.button').css({
            'line-height': height
        });
        if (clicked) {
            $(".button").css({ display: "inline-block" })
			$("#menuParent").css({ display: "inline-block" })
            $("#menuParent").animate({ opacity: "1" }, 300)
            clicked = false;
        }
        else {
            $(".button").css({ display: "none" })
            $("#menuParent").animate({ opacity: "0" }, 300)
			setTimeout(continueExecution, 300)
			function continueExecution() {
				$("#menuParent").css({ display: "none" })
			}
            clicked = true;
        }
        return false;
    });
});