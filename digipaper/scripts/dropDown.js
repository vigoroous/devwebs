$(document).ready(function () {
    var clicked = true;
    $("#view-more").click(function () {
        if (clicked) {
            $(".stories").animate({ height: "+=300" }, 700)
            $("#book7").css({ display: "inline-block" })
            $("#book8").css({ display: "inline-block" })
            $("#book9").css({ display: "inline-block" })
            $("#book7").animate({ height: "300" }, 700)
            $("#book8").animate({ height: "300" }, 700)
            $("#book9").animate({ height: "300" }, 700)
			document.getElementById("view-more").innerHTML = "hide";
            //$(".pointer").css({ background: "url('images/pointerUp.png') no-repeat center #FF694B" })
            clicked = false;
        }
        else {           
            $("#book7").animate({ height: "0" }, 300)
            $("#book8").animate({ height: "0" }, 300)
            $("#book9").animate({ height: "0" }, 300)
            //function func () {
            //    $("#book7").css({ display: "none" })
            //    $("#book8").css({ display: "none" })
            //    $("#book9").css({ display: "none" })
            //}
            //setTimeout(func, 400)
			document.getElementById("view-more").innerHTML = "VIEW MORE";
            //$(".pointer").css({ background: "url('images/pointerDown.png') no-repeat center #FF694B" })
            $(".stories").animate({ height: "-=300" }, 400)
            clicked = true;
        }
        return false;
    });
});