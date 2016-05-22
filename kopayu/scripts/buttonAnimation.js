$(document).ready(function () {
    $(".button").mouseenter(function () {
        $(".line1").animate({ width: "10%" }, 1)
        $(".line2").animate({ width: "10%" }, 1)
        $(".line3").animate({ width: "10%" }, 100)
        $(".line4").animate({ width: "10%" }, 100)
        $(".button p.visible").animate({ "letter-spacing": "+=0.03em" }, 400)
    });
    $(".button").mouseleave(function () {
        if ($(".button p.visible").is(':animated')) {
            $(".button").find("p.visible").stop(true, true)
            $(".button p.visible").animate({ "letter-spacing": "-0.53px" }, 400)
        }
        else {
            $(".button p.visible").animate({ "letter-spacing": "-=0.03em" }, 400)
        }        
        $(".line1").animate({ width: "51%" }, 1)
        $(".line2").animate({ width: "51%" }, 1)
        $(".line3").animate({ width: "51%" }, 100)
        $(".line4").animate({ width: "51%" }, 100)
    });
    return false;
});